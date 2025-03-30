import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { message } from 'antd';
import Keycloak from "keycloak-js";
import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../state/authorization/Action";

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
   
   const handleGoogleLogin = async (e) => {

      e.preventDefault();

      try {
         const keycloak = new Keycloak({
            url: 'http://localhost:9000',
            realm: 'spring-boot-code',
            clientId: 'authenticationClientId',
            redirectUri: 'http://localhost:3000/auth-redirect',
            pkceMethod: 'S256'
         });

         await keycloak.init({
            onLoad: 'login-required',
            responseType: 'code', 
            checkLoginIframe: false,
            redirectUri: 'http://localhost:3000/auth-redirect',
            pkceMethod: 'S256'
         });

         await keycloak.login({
            idpHint: 'google',
            redirectUri: 'http://localhost:3000/auth-redirect',
            scope: 'openid profile email',
         });

      } catch (error) {
         console.error('Login error:');
         message.error('Đăng nhập thất bại');
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
