import axios from 'axios';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AuthRedirect() {
   const navigate = useNavigate();
   const isProcessing = useRef(false); // Thêm biến ref để track trạng thái

   useEffect(() => {
      const getLastCodeVerifier = () => {
         for (let i = localStorage.length - 1; i >= 0; i--) {
            const key = localStorage.key(i);
            if (key?.startsWith('kc-callback-')) {
               try {
                  const data = JSON.parse(localStorage.getItem(key));
                  if (data?.pkceCodeVerifier) {
                     return data.pkceCodeVerifier;
                  }
               } catch (e) {
                  console.error('Error parsing localStorage item:', e);
               }
            }
         }
         return null;
      };

      const parseFragment = (hash) => {
         return hash.substring(1).split('&').reduce((result, item) => {
            const [key, value] = item.split('=');
            result[key] = decodeURIComponent(value);
            return result;
         }, {});
      };

      const handleAuthentication = async () => {
         if (isProcessing.current) return;
         isProcessing.current = true;

         try {
            const fragment = parseFragment(window.location.hash);
            const code = fragment.code;
            const error = fragment.error;

            if (error) {
               navigate('/login', { replace: true });
               return;
            }

            if (!code) {
               navigate('/login', { replace: true });
               return;
            }

            const codeVerifier = getLastCodeVerifier();
            if (!codeVerifier) {
               throw new Error('Missing PKCE code verifier');
            }

            const response = await axios.post('http://localhost:8080/auth/token', {
               code,
               codeVerifier,
               redirectUri: window.location.origin + '/auth-redirect'
            });

            if (response?.data) {
               localStorage.setItem('accessToken', response?.data?.access_token);
               localStorage.setItem('refreshToken', response?.data?.refresh_token);
               localStorage.setItem('expiresIn', response?.data?.expires_in);
               window.history.replaceState({}, document.title, window.location.pathname);
               navigate('/home', { replace: true });
            }
         } catch (err) {
            console.error('Token exchange failed:', {
               error: err.response?.data,
               status: err.response?.status
            });
            navigate('/login', { 
               state: { error: err.response?.data?.error || err.message }, 
               replace: true 
            });
         } finally {
            isProcessing.current = false;
         }
      };

      handleAuthentication();

      // Cleanup function để tránh memory leak
      return () => {
         isProcessing.current = false;
      };
   }, [navigate]); // Thêm navigate vào dependencies

   return <div>Processing authentication...</div>;
}