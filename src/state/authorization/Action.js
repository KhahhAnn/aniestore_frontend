import axios from "axios"
import { API_BASE_URL, api } from "../../config/ApiConfig"
import { CHANGE_PASSWORD_REQUEST, GET_TOKEN_FAILURE, GET_TOKEN_REQUEST, GET_TOKEN_SUCCESS, GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS, UPDATE_USER_FAILURE, UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS } from "./ActionType"
import { jwtDecode } from "jwt-decode";

const registerRequest = () => ({ type: REGISTER_REQUEST });
const registerSuccess = (user) => ({ type: REGISTER_SUCCESS, payload: user });
const registerFailure = (error) => ({ type: REGISTER_FAILURE, payload: error });

export const register = (userData) => async (dispatch) => {
   dispatch(registerRequest());
   try {
      const response = await axios.post(`${API_BASE_URL}/auth/register`, userData)
      const user = response.data;
      if (user.jwt) {
         localStorage.setItem("jwt", user.jwt);
      }
      console.log("user:", user);
      dispatch(registerSuccess(user));
   } catch (error) {
      dispatch(registerFailure(error.message));
   }
}

const loginRequest = () => ({ type: LOGIN_REQUEST });
const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user });
const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error });
export const login = (userData) => async (dispatch) => {
   dispatch(loginRequest());
   try {
      const response = await axios.post(`${API_BASE_URL}/auth/login`, userData);
      const user = response.data;
      if (!user.jwt) {
         dispatch(loginFailure("Đăng nhập thất bại"));
         return { success: false, message: "Đăng nhập thất bại" };
      }
      localStorage.setItem("jwt", user.jwt);
      dispatch(loginSuccess(user));
      return { success: true };
   } catch (error) {
      dispatch(loginFailure(error.message));
      return { success: false, message: "Đăng nhập thất bại" };
   }
};


const getUserRequest = () => ({ type: GET_USER_REQUEST });
const getUserSuccess = (user) => ({ type: GET_USER_SUCCESS, payload: user });
const getUserFailure = (error) => ({ type: GET_USER_FAILURE, payload: error });
export const getUser = (jwt) => async (dispatch) => {
   dispatch(getUserRequest());
   try {
      const response = await axios.get(`${API_BASE_URL}/api/users/profile`, {
         headers: {
            "Authorization": `Bearer ${jwt}`
         }
      })
      const user = response.data;
      dispatch(getUserSuccess(user));

   } catch (error) {
      dispatch(getUserFailure(error.message));
   }
}

const getTokenRequest = () => ({ type: GET_TOKEN_REQUEST });
const getTokenSuccess = (token) => ({ type: GET_TOKEN_SUCCESS, payload: token });
const getTokenFailure = (error) => ({ type: GET_TOKEN_FAILURE, payload: error });
export const getMyToken = (jwtgg) => async (dispatch) => {
   dispatch(getTokenRequest());
   try {
      
      const decodedUser = jwtDecode(jwtgg);
      const oauth = decodedUser;
   
      const response = await axios.get(`${API_BASE_URL}/api/users/profile-oauth`, {
         params: { email: oauth.email }
      });
      const user = response.data;
      dispatch(getTokenSuccess(user));
      const res = await axios.get(`${API_BASE_URL}/api/users/oauth-get-token`, {
         params: { email: oauth.email }
      });
      if(res?.data) {
         localStorage.setItem("jwt", res?.data?.jwt);
      }

   } catch (error) {
      dispatch(getTokenFailure(error.message));
   }
}

const updateRequest = () => ({ type: UPDATE_USER_REQUEST });
const updateSuccess = (user) => ({ type: UPDATE_USER_SUCCESS, payload: user });
const updateFailure = (error) => ({ type: UPDATE_USER_FAILURE, payload: error });
export const update = (userData, jwt, img) => async (dispatch) => {
   dispatch(updateRequest());
   try {
      const userRequest = {
         user: userData,
         img: img
      };
      const response = await axios.put(`${API_BASE_URL}/api/users/update`, userRequest, {
         headers: {
            "Authorization": `Bearer ${jwt}`,
            "Content-Type": "application/json"
         }
      })
      const user = response.data;
      if (user.jwt) {
         localStorage.setItem("jwt", user.jwt);
      }
      console.log("user:", user);
      dispatch(updateSuccess(user));

   } catch (error) {
      dispatch(updateFailure(error.message));
   }
}

const changePasswordRequest = () => ({ type: CHANGE_PASSWORD_REQUEST });
const changePasswordSuccess = (user) => ({ type: UPDATE_USER_SUCCESS, payload: user });
const changePasswordFailure = (error) => ({ type: UPDATE_USER_FAILURE, payload: error });
export const changePassword = (jwt, password) => async (dispatch) => {
   dispatch(changePasswordRequest());
   try {
      const response = await api.put(`/api/users/change-password`, password, {
         headers: {
            "Authorization": `Bearer ${jwt}`,
            "Content-Type": "application/json"
         }
      })
      const user = response.data;
      if (user.jwt) {
         localStorage.setItem("jwt", user.jwt);
      }
      console.log("user:", user);
      dispatch(changePasswordSuccess(user));

   } catch (error) {
      dispatch(changePasswordFailure(error.message));
   }
}


export const logout = () => async (dispatch) => {
   dispatch({ type: LOGOUT, payload: null });
   // try {
   //    const response = await axios.post(`${API_BASE_URL}/auth/oauth-login`, {
   //       token: googleToken,
   //    });
   //    return { success: true };
   // } catch (error) {
   //    return { success: false, message: "Đăng xuất thất bại" };
   // }
   localStorage.clear();
}


const loginOAuthRequest = () => ({ type: LOGIN_REQUEST });
const loginOAuthSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user });
const loginOAuthFailure = (error) => ({ type: LOGIN_FAILURE, payload: error });
export const loginWithOAuth = (googleToken) => async (dispatch) => {
   dispatch(loginOAuthRequest());
   try {
      const response = await axios.post(`${API_BASE_URL}/auth/oauth-login`, {
         token: googleToken,
      });

      const user = response.data;
      if (!user.jwt) {
         dispatch(loginOAuthFailure("Đăng nhập thất bại"));
         return { success: false, message: "Đăng nhập thất bại" };
      }

      // Lưu token vào localStorage
      localStorage.setItem("jwt", user.jwt);
      dispatch(loginOAuthSuccess(user));

      return { success: true };
   } catch (error) {
      dispatch(loginOAuthFailure(error.message));
      return { success: false, message: "Đăng nhập thất bại" };
   }
};