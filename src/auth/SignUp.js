import React, { useEffect, useState } from "react";
import "./SingIn.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import { useDispatch, useSelector } from "react-redux";
import { getUser, register } from "../state/authorization/Action";
import { message } from "antd";
function SignUp() {
   const [state, setState] = useState({
      firstName: "",
      lastName: "",
      email: "",
      password: ""
   });
   const [showSuccess, setShowSuccess] = useState(false);
   const handleChange = evt => {
      const value = evt.target.value;
      setState({
         ...state,
         [evt.target.name]: value
      });
   };
   const dispatch = useDispatch();
   const { auth } = useSelector(store => store)
   const jwt = localStorage.getItem("jwt")

   useEffect(() => {
      if (showSuccess) {
         const timer = setTimeout(() => {
            setShowSuccess(false);
         }, 2000);
         return () => clearTimeout(timer);
      }
      if (jwt) {
         dispatch(getUser(jwt))
      }
   }, [jwt, auth.jwt, showSuccess])

   const handleSubmit = async (event) => {
      event.preventDefault();
      for (const key in state) {
         setState({
            ...state,
            [key]: ""
         });
      }
      if (!auth.user) {
         try {
            const userData = {
               firstName: state.firstName,
               lastName: state.lastName,
               email: state.email,
               password: state.password,
            }
            console.log(userData);
            dispatch(register(userData));
            message.success('Đăng ký thành công vui lòng kiểm tra email để kích hoạt tài khoản');
            console.log(userData);
         } catch(error) {
            message.error('Đăng ký thất bại vui lòng kiểm tra thông tin đăng kí');
         }
      }
   }


   return (
      <div className="form-container sign-up-container">
         {showSuccess && (
            <div className="success-message">
               <h1>Đăng kí thành công!</h1>
               <p>Vui lòng vào email để kích hoạt tài khoản của bạn.</p>
            </div>
         )}
         <form onSubmit={handleSubmit}>
            <h1>Create Account</h1>
            <div className="social-container">
               <a href="#" className="social">
                  <FacebookIcon />
               </a>
               <a href="#" className="social">
                  <GoogleIcon />
               </a>
               <a href="#" className="social">
                  <LinkedInIcon />
               </a>
            </div>
            <span>or use your email for registration</span>
            <input
               type="text"
               name="firstName"
               value={state.firstName}
               onChange={handleChange}
               placeholder="Họ và tên đệm"
            />
            <input
               type="text"
               name="lastName"
               value={state.lastName}
               onChange={handleChange}
               placeholder="Tên"
            />
            <input
               type="email"
               name="email"
               value={state.email}
               onChange={handleChange}
               placeholder="Email"
            />
            <input
               type="password"
               name="password"
               value={state.password}
               onChange={handleChange}
               placeholder="Mật khẩu"
            />
            <button>Sign Up</button>
         </form>
      </div>
   );
}

export default SignUp;
