import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import { useDispatch } from "react-redux";
import { login } from "../state/authorization/Action";
import { message } from 'antd';

function SignIn() {
   const [state, setState] = React.useState({
      email: "",
      password: ""
   });
   const handleChange = evt => {
      const value = evt.target.value;
      setState({
         ...state,
         [evt.target.name]: value
      });
   };
   const dispatch = useDispatch();

   const handleSubmit = (event) => {
      event.preventDefault();
      try{
         const userData = {
            email: state.email,
            password: state.password,
         }
         dispatch(login(userData))
         message.success('Đăng nhập thành công');
         console.log(userData);
      } catch(error) {
         message.error('Đăng nhập thất bại');
      }
   }

   return (
      <div className="form-container sign-in-container">
         <form onSubmit={handleSubmit}>
            <h1>Sign in</h1>
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
            <span>or use your account</span>
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
            <a href="#">Forgot your password?</a>
            <button>Sign In</button>
         </form>
      </div>
   );
}

export default SignIn;
