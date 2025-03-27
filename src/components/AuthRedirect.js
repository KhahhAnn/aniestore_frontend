import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { message } from 'antd';
import axios from 'axios';

export default function AuthRedirect() {
   const navigate = useNavigate();
   const location = useLocation();

   useEffect(() => {
      const handleAuthentication = async () => {
         debugger
         // 1. Lấy hash từ URL hoàn chỉnh (bao gồm cả phần sau #)
         const params = new URLSearchParams(location.search);
         const code = params.get('code');
         const error = params.get('error');

         console.log('Hash parameters:', { code, error, params: Object.fromEntries(params.entries()) });

         // 2. Xử lý lỗi nếu có
         if (error) {
            message.error(`Login failed: ${params.get('error_description') || error}`);
            navigate('/login', { replace: true });
            return;
         }

         // 3. Xử lý code
         if (code) {
            try {
               const response = await axios.post('http://localhost:8080/auth/token', {
                  code,
                  redirectUri: window.location.origin + '/auth-redirect'
               });

               if (response.data.access_token) {
                  localStorage.setItem('authToken', response.data.access_token);

                  // 4. Xóa hash khỏi URL sau khi xử lý
                  window.history.replaceState({}, document.title, window.location.pathname);

                  navigate('/home', { replace: true });
               }
            } catch (err) {
               console.error('Token exchange failed:', {
                  error: err.response?.data,
                  status: err.response?.status
               });
               navigate('/login', { state: { error: err.message }, replace: true });
            }
         } else {
            navigate('/login', { replace: true });
         }
      };

      handleAuthentication();
   }, [navigate]);

   return <div>Processing authentication...</div>;
}