import { Modal } from '@mui/material';
import React from 'react';
import AuthForm from './AuthForm';


const AuthModal = ({ handleClose, open }) => {
   return (
      <div>
         <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
         >
            <div className='ml-[400px] mt-[100px] w-full'>
               <AuthForm />
            </div>
         </Modal>
      </div>
   )
}

export default AuthModal