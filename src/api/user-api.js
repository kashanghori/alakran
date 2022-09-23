import http from "./http";

//import { setCookie,eraseCookie,getCookie } from "../utils/cookies";

export const signUp = async user => {
  try {
    await http.post("/users", user);
  } catch (err) {
    if (err.response) {
      let message = "Something went wrong. Please contact us";
      const { error } = err.response.data;
      switch (error.code) {
        case "WRONG_CAPTCHA":
          message = error.message;
          break;
        default:
      }
      if (error.details && error.details.messages) {
        // Email error
        if (error.details.messages.email) {
          message = error.details.messages.email[0];
          if (message === "is invalid") message = `Email ${message}`;
        }
      }
      const sanitizedError = new Error(message);
      sanitizedError.code = error.code;
      throw sanitizedError;
    }
  }
};

export const login = async (email, password) => {
  try {
    const resp = await http.post("/users/login", { email, password });
    return resp.data;
    //setCookie("access_token", "test");
  } catch (err) {
    if (err.response) {
      let message = "Something went wrong. Please contact us";
      const { error } = err.response.data;
      switch (error.code) {
        case "LOGIN_FAILED":
          message = "Wrong email or password";
          break;
        case "LOGIN_FAILED_EMAIL_NOT_VERIFIED":
          message = "Email is not verified";
          break;
        default:
      }
      throw Error(message);
    }
  }
};

export const logout = async () => {
  try {
    await http.post("/users/logout");
    //alert( getCookie("access_token"));
  } catch (err) {
    throw err;
  }
};

export const reset = async email => {
  try {
    await http.post("/users/reset", { email });
  } catch (err) {
    if (err.response) {
      let message = "Something went wrong. Please contact us";
      const { error } = err.response.data;
      switch (error.code) {
        case "EMAIL_NOT_FOUND":
          message = "Email is not found";
          break;
        case "RESET_FAILED_EMAIL_NOT_VERIFIED":
          message = error.message;
          break;
        default:
      }
      throw Error(message);
    }
  }
};

export const resetPassword = async (newPassword, authQuery) => {
  try {
    await http.post(`/users/reset-password${authQuery}`, { newPassword });
  } catch (err) {
    if (err.response) {
      let message = "Something went wrong. Please contact us";
      const { error } = err.response.data;
      switch (error.code) {
        case "USER_NOT_FOUND":
          message = "User is not found";
          break;
        default:
      }
      throw Error(message);
    }
  }
};

export const getData = async () => {
  const result = await http.get("/users/data");
  return result.data;
};

export const setData = async data => {
  try {
    await http.post("/users/data", data);
  } catch (err) {
    if (err.response) {
      let message = "Something went wrong. Please contact us";
      throw Error(message);
    }
  }
};

export const getCaptcha = async () => {
  try {
    const result = await http.get("users/captcha");
    return result.data;
  } catch (err) {
    if (err.response) {
      let message = "Something went wrong. Please contact us";
      throw Error(message);
    }
  }
};
