import React, { useEffect, useState } from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import { useDispatch } from "react-redux";
import { login } from "../state/authorization/Action";
import { message } from 'antd';
import axios from "axios";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import Keycloak from "keycloak-js";


const GOOGLE_CLIENT_ID = "395259230290-3a2i490sv6gmcdu99tlhdbacgpe6r5ba.apps.googleusercontent.com";

const keycloakConfig = new Keycloak({
   url: 'http://localhost:9000',
   realm: 'spring-boot-code',
   clientId: 'authenticationClientId',
});

function SignIn() {
   const [state, setState] = React.useState({
      email: "",
      password: ""
   });

   const handleChange = (evt) => {
      const value = evt.target.value;
      setState({
         ...state,
         [evt.target.name]: value
      });
   };

   const dispatch = useDispatch();

   const handleSubmit = async (event) => {
      event.preventDefault();
      const userData = {
         email: state.email,
         password: state.password,
      }
      const result = await dispatch(login(userData));
      if (result.success) {
         message.success('Đăng nhập thành công');
      } else {
         message.error(result.message || 'Đăng nhập thất bại');
      }
   }

   const initKeycloak = async () => {
      try {
         const keycloak = new Keycloak({
            url: 'http://localhost:9000',
            realm: 'spring-boot-code',
            clientId: 'authenticationClientId'
         });

         const authenticated = await keycloak.init({
            onLoad: 'check-sso',
            pkceMethod: 'S256', // Thêm PKCE để bảo mật
            checkLoginIframe: false // Tắt check iframe nếu không cần
         });

         console.log("Keycloak initialized:", authenticated);
         return keycloak;
      } catch (error) {
         console.error("Keycloak init error details:", {
            message: error.message,
            stack: error.stack,
            response: error.response
         });
         message.error(`Keycloak error: ${error.message}`);
         return null;
      }
   };

   const handleGoogleLogin = async (e) => {

      e.preventDefault();

      try {
         const keycloak = new Keycloak({
            url: 'http://localhost:9000',
            realm: 'spring-boot-code',
            clientId: 'authenticationClientId'
         });

         // await keycloak.clearToken();
         // console.log("success");

         await keycloak.init({
            onLoad: 'login-required',
            pkceMethod: 'S256',
            responseType: 'code',
            checkLoginIframe: false,
            flow: 'standard',
            responseMode: 'fragment' // Quan trọng
         });

         await keycloak.login({
            idpHint: 'google',
            redirectUri: 'http://localhost:3000/',
            scope: 'openid profile email',
         });
      } catch (error) {
         console.error('Login error:');
         message.error('Đăng nhập thất bại');
      }
   };


   const handleLogout = async (e) => {
      e.preventDefault(); // Ngăn hành vi mặc định nếu là thẻ <a>

      try {
         const keycloak = new Keycloak({
            url: 'http://localhost:9000',
            realm: 'spring-boot-code',
            clientId: 'authenticationClientId'
         });

         await keycloak.init({
            onLoad: 'login-required', // Sửa thành login-required để đảm bảo logout triệt để
            pkceMethod: 'S256'
         });

         // Thêm các bước xóa dữ liệu cục bộ trước
         localStorage.removeItem('kc-callback');
         localStorage.removeItem('kc-idp');
         sessionStorage.clear();

         // Gọi logout với tham số đầy đủ
         await keycloak.logout({
            redirectUri: window.location.origin + '/login', // Dùng URL tuyệt đối
            idTokenHint: keycloak.idToken // Truyền idToken nếu có
         });

         // Force reload trình duyệt
         window.location.href = '/login';

      } catch (error) {
         console.error('Full logout error:');
         // Fallback: vẫn chuyển hướng dù có lỗi
         window.location.href = '/login';
      }
   };


   return (
      <div className="form-container sign-in-container">
         <form onSubmit={handleSubmit}>
            <h1>Đăng nhập</h1>
            <div className="social-container">
               <a href="#" className="social">
                  <FacebookIcon />
               </a>
               <a href="#" className="social" onClick={handleGoogleLogin}>
                  <GoogleIcon />
               </a>
               <a href="#" className="social">
                  <LinkedInIcon />
               </a>
            </div>
            <span>Hoặc sử dụng tài khoản đã đăng kí</span>
            <input
               type="email"
               placeholder="Email"
               name="email"
               value={state.email}
               onChange={handleChange}
            />
            <input
               type="password"
               name="password"
               placeholder="Mật khẩu"
               value={state.password}
               onChange={handleChange}
            />
            <a href="#">Quên mật khẩu</a>
            <button>Đăng nhập</button>
         </form>
      </div>
   );
}

export default SignIn;
