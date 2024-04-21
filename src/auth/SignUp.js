import React, { useEffect } from "react";
import "./SingIn.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import { useDispatch, useSelector } from "react-redux";
import { getUser, register } from "../state/authorization/Action";
function SignUp() {
   const [state, setState] = React.useState({
      firstName: "",
      lastName: "",
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
   const { auth } = useSelector(store => store)
   const jwt = localStorage.getItem("jwt")

   useEffect(() => {
      if (jwt) {
         dispatch(getUser(jwt))
      }
   }, [jwt, auth.jwt])

   const handleSubmit = async (event) => {
      event.preventDefault();
      const { name, email, password } = state;
      alert(
         `You are sign up with name: ${name} email: ${email} and password: ${password}`
      );

      for (const key in state) {
         setState({
            ...state,
            [key]: ""
         });
      }
      if (!auth.user) {
         const userData = {
            firstName: state.firstName,
            lastName: state.lastName,
            email: state.email,
            password: state.password,
         }
         dispatch(register(userData));
         console.log(userData);
      }
   }


   return (
      <div className="form-container sign-up-container">
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
