import React, { useState } from 'react'
import "./SingIn.css";
import SignUp from './SignUp';
import SignIn from './SignIn';

const AuthForm = () => {
   const [type, setType] = useState("signIn");
   const handleOnClick = text => {
      if (text !== type) {
         setType(text);
         return;
      }
   };
   const containerClass =
      "container " + (type === "signUp" ? "right-panel-active" : "");
   return (
      <div className="App">
         <div className={containerClass} id="container">
            <SignUp />
            <SignIn />
            <div className="overlay-container">
               <div className="overlay">
                  <div className="overlay-panel overlay-left">
                     <h1 className='font-bold text-xl'>Chào mừng quay trở lại!</h1>
                     <p className='text-base font-light'>
                        To keep connected with us please login with your personal info
                     </p>
                     <button
                        className="ghost"
                        id="signIn"
                        onClick={() => handleOnClick("signIn")}
                     >
                        Sign In
                     </button>
                  </div>
                  <div className="overlay-panel overlay-right">
                     <h1 className='font-bold text-xl'>Hello, Friend!</h1>
                     <p className='text-base font-light'>Enter your personal details and start journey with us</p>
                     <button
                        className="ghost"
                        id="signUp"
                        onClick={() => handleOnClick("signUp")}
                     >
                        Sign Up
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default AuthForm