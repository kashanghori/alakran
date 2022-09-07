<?php

/*
 * Trying to create a pay page
 */

  require_once 'payconf_db.php';
  require_once 'payconf_network.php';

  $conn = null;
  $stmt = null;
  $uuid = null;
  $request_json = null;
  $result_json = null;

  try {
      $conn = sqlsrv_connect( DB_SERVER, array("UID" => DB_USER, "PWD" => DB_PASSWORD, "Database"=> DB_NAME));
      if (!$conn) {
        throw new Exception('Database connection failed');
      }

      $return_url = isset($_REQUEST["return_url"],)?$_REQUEST["return_url"]:DEFAULT_RETURN_URL;

      $params = array (
          array(isset($_REQUEST["user"])?$_REQUEST["user"]:null,  SQLSRV_PARAM_IN),
          array(PT_VARIANT,  SQLSRV_PARAM_IN),
          array(isset($_REQUEST["amount"])?$_REQUEST["amount"]:null, SQLSRV_PARAM_IN),
          array(isset($_REQUEST["currency"])?$_REQUEST["currency"]:null,  SQLSRV_PARAM_IN),
          array($return_url,  SQLSRV_PARAM_IN)
      );

      $tsql = "exec payment.pr_payment_begin @user_id=?, @variant=?, @amount=?, @currency=?, @return_url=?";

      $stmt = sqlsrv_query($conn, $tsql, $params);

      if (!$stmt) {
        throw new Exception('Begin payment prepare failed');
      }

      if (!sqlsrv_fetch($stmt)) {
        throw new Exception('Begin payment fetch failed');
      }

      $uuid = sqlsrv_get_field( $stmt, 0);
      $amount_topup = sqlsrv_get_field( $stmt, 1);
      $amount_charge = sqlsrv_get_field( $stmt, 2);
      $currency = sqlsrv_get_field( $stmt, 3);
      $email = sqlsrv_get_field( $stmt, 5);
      $phone = sqlsrv_get_field( $stmt, 6);
      $billing_first_name = sqlsrv_get_field( $stmt, 7);
      $billing_last_name = sqlsrv_get_field( $stmt, 8);
      $billing_address = sqlsrv_get_field( $stmt, 9);
      $billing_city = sqlsrv_get_field( $stmt, 10);
      $billing_state = sqlsrv_get_field( $stmt, 11);
      $billing_country_code = sqlsrv_get_field( $stmt, 12);
      $billing_zip_code = sqlsrv_get_field( $stmt, 13);

      sqlsrv_free_stmt( $stmt);
      $stmt = null;

      // Obtain new access_token
      $crl = curl_init(PT_API_URL."/identity/auth/access-token");
      curl_setopt($crl, CURLOPT_RETURNTRANSFER, true);
      curl_setopt($crl, CURLOPT_TIMEOUT, 30);
      curl_setopt($crl, CURLOPT_SSL_VERIFYPEER, false);
      curl_setopt($crl, CURLOPT_SSL_VERIFYHOST, false);
      curl_setopt($crl, CURLINFO_HEADER_OUT, true);
      curl_setopt($crl, CURLOPT_POST, true);
      curl_setopt($crl, CURLOPT_HTTPHEADER, array(
          'Content-Type: application/vnd.ni-identity.v1+json',
          'Authorization: '."Basic ".PT_SHOPKEY
      ));
      $result = curl_exec($crl);
      curl_close($crl);

      if (!isset($result)) {
        throw new Exception('AccessToken result: empty');
      }

      $result_json = json_decode($result);

      if (!isset($result_json->access_token)) {
        throw new Exception('AccessToken result: no access_token field');
      }

      $access_token = $result_json->access_token;

      $result_json = null;

      // create peyment order
      $request_json = array(
          'action' => 'PURCHASE',
          'amount' => array(
            "value"=>$amount_charge*100,
            "currencyCode"=>$currency
          ),
          'emailAddress' => $email,
          'billingAddress' => array(
              'firstName'=> $billing_first_name,
              'lastName'=> $billing_last_name,
              'address1'=> $billing_address,
              'city'=> $billing_city,
              'countryCode'=> $billing_country_code
           ),
          'merchantOrderReference' => $uuid,
          'merchantAttributes'=> array(
              'redirectUrl'=>$return_url
          )
      );

      $crl = curl_init(PT_API_URL."/transactions/outlets/".PT_SHOPREF."/orders");
      curl_setopt($crl, CURLOPT_RETURNTRANSFER, true);
      curl_setopt($crl, CURLOPT_TIMEOUT, 30);
      curl_setopt($crl, CURLOPT_SSL_VERIFYPEER, false);
      curl_setopt($crl, CURLOPT_SSL_VERIFYHOST, false);
      curl_setopt($crl, CURLOPT_POST, true);
      curl_setopt($crl, CURLINFO_HEADER_OUT, true);
      curl_setopt($crl, CURLOPT_HTTPHEADER, array(
        'Authorization: Bearer '.$access_token,
        'Content-Type: application/vnd.ni-payment.v2+json',
        'Accept: application/vnd.ni-payment.v2+json'
      ));
      curl_setopt($crl, CURLOPT_POSTFIELDS, json_encode($request_json));
      $result = curl_exec($crl);
      curl_close($crl);

      if (!isset($result)) {
        throw new Exception('CreateOrder result: empty');
      }

      $result_json = json_decode($result);

      if (!isset($result_json->_links->payment->href)) {
        throw new Exception('CreateOrder result: no _links->payment->href field');
      }

      $url = $result_json->_links->payment->href;

      // change original uuid to network order uuid
/*
      $params = array (
          array($uuid,  SQLSRV_PARAM_IN),
          array($result_json->reference, SQLSRV_PARAM_IN)
      );

      $tsql = "exec payment.pr_payment_set_uuid @uuid=?, @new_uuid=?";

      $stmt = sqlsrv_query($conn, $tsql, $params);

      if (!$stmt) {
        throw new Exception('Set payment uuid failed');
      }

      $uuid = $result_json->reference;

      sqlsrv_free_stmt( $stmt);
      $stmt = null;
*/

      if (isset($url))
        echo (json_encode(array('url'=>$url.'&slim=2')));
  }
  catch (Exception $e) {
    // write log to file
    $fp = fopen('../logs/payments/network/'.date('Y-m-d_His').'_error.txt', 'w');

    fwrite($fp, 'PayInit failed: '.$e->getMessage());

    fwrite($fp, PHP_EOL.'UUID: '.$uuid);

    fwrite($fp, PHP_EOL.'Request data:');
		fwrite($fp, PHP_EOL.serialize($_REQUEST));

    fwrite($fp, PHP_EOL.'API Request data:');
		fwrite($fp, PHP_EOL.serialize($request_json));

    fwrite($fp, PHP_EOL.'API Response data:');
		fwrite($fp, PHP_EOL.serialize($result_json));

		fclose($fp);

    // write log to database

    // return error
    http_response_code(500);
		echo '{"error":{"text":'. $e->getMessage() .'}}';
  }

  if ($stmt)
    sqlsrv_free_stmt( $stmt);

  if ($conn)
    sqlsrv_close( $conn);

?>
