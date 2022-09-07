<?php
  require_once "payconf_db.php";

  $uuid = null;
  $order = null;
  $json = null;

	try {

		$ret_url = "";

		$json = file_get_contents("php://input");
/*
    $fp = fopen('../logs/payments/network/'.date('Y-m-d_His').'_dump.txt', 'w');
    fwrite($fp, PHP_EOL.'Callback data:');
    fwrite($fp, PHP_EOL.serialize($json));
    fclose($fp);
*/
    $order = json_decode($json);

    if (!isset($order)) {
      http_response_code(404);
      echo '{"error":{"text":'. 'No order data' .'}}';
      die();
    }

    $uuid = $order->order->merchantOrderReference;

		$status_code = 0;
		if ($order->eventName === "AUTHORISED") {
				$status_code = 100;
		}
		else if ($order->eventName === "PURCHASED") {
				$status_code = 200;
		}
		else if (
				strpos($order->eventName, "DECLINED") ||
				strpos($order->eventName, "FAILED") ||
				strpos($order->eventName, "CANCELLED") ||
				strpos($order->eventName, "REJECTED")
		) {
			  $status_code = -1;
		}
		else {
			$status_code = 10;
		}

/*
    $fp = fopen('../logs/payments/network/'.date('Y-m-d_His').'_dump.txt', 'w');
    fwrite($fp, PHP_EOL.'Request data:');
    fwrite($fp, PHP_EOL.serialize($json));
    fwrite($fp, PHP_EOL.$order->eventName);
    fwrite($fp, PHP_EOL.$status_code);
    fclose($fp);
*/
		if ($status_code===0) {
				echo '{"success": true}';
				die();
		}


		$conn = sqlsrv_connect( DB_SERVER, array("UID" => DB_USER, "PWD" => DB_PASSWORD, "Database"=> DB_NAME));

    if (!$conn) {
      throw new Exception('Database connection failed');
    }

		$params = array (
	      array($uuid,  SQLSRV_PARAM_IN),
	      array($status_code,  SQLSRV_PARAM_IN),
	      array($order->eventName, SQLSRV_PARAM_IN),
	      array($order->order->merchantOrderReference,  SQLSRV_PARAM_IN),
				array(number_format($order->order->amount->value / 100, 2),  SQLSRV_PARAM_IN),
				array($order->order->amount->currencyCode,  SQLSRV_PARAM_IN),
				array($order->order->_embedded->payment[0]->paymentMethod->pan,  SQLSRV_PARAM_IN),
				array($order->order->_embedded->payment[0]->paymentMethod->name,  SQLSRV_PARAM_IN),
				array($order->order->_embedded->payment[0]->paymentMethod->cardholderName,  SQLSRV_PARAM_IN)
	  );

		$sql = "exec payment.pr_payment_end
			@uuid=?
		, @status_code=?
		, @status_text=?
		, @transaction_id=?
		, @transaction_amount=?
		, @transaction_currency=?
		, @transaction_card_hpan=?
		, @transaction_card_type=?
		, @transaction_card_name=?
		";

		$stmt = sqlsrv_query($conn, $sql, $params);

		if ($stmt) {

			sqlsrv_fetch($stmt);

			$ret_url = sqlsrv_get_field($stmt, 0);

			echo '{"success": true}';

			sqlsrv_free_stmt( $stmt);

		}
		else {
      throw new Exception('Order does not exist');
		}

		sqlsrv_close( $conn);

		if ($ret_url !== "") {
			header("Location: ". $ret_url);
		}

	}
	catch(Exception $e)
  {
    // write log to file
    $fp = fopen('../logs/payments/network/'.date('Y-m-d_His').'_error.txt', 'w');

    fwrite($fp, 'PayDone failed: '.$e->getMessage());

    fwrite($fp, PHP_EOL.'UUID: '.$uuid);

    fwrite($fp, PHP_EOL.'Request data:');
		fwrite($fp, PHP_EOL.serialize($json));

		fclose($fp);

    // write log to database

    // return error
    http_response_code(404);
		echo '{"error":{"text":'. $e->getMessage() .'}}';
  }




?>
