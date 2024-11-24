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
                        Đăng nhập
                     </button>
                  </div>
                  <div className="overlay-panel overlay-right">
                     <h1 className='font-bold text-xl'>Chào mừng quay trở lại!</h1>
                     <p className='text-base font-light'>Nhập thông tin cá nhân của bạn và bắt đầu hành trình cùng chúng tôi</p>
                     <button
                        className="ghost"
                        id="signUp"
                        onClick={() => handleOnClick("signUp")}
                     >
                        Đăng ký
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default AuthForm