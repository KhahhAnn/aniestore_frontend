import React, { useState, useEffect } from 'react';

const TimerCountdown = ({ targetDate }) => {
   const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      let timeLeft = {};

      if (difference > 0) {
         timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
         };
      }

      return timeLeft;
   };

   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

   useEffect(() => {
      const timer = setTimeout(() => {
         setTimeLeft(calculateTimeLeft());
      }, 1000);

      return () => clearTimeout(timer);
   });

   const formatTime = (time) => {
      return Object.keys(time)
         .map((interval) => {
            return `${time[interval].toString().padStart(2, '0')}`;
         })
         .join(' : ');
   };

   return (
      <div>
         <p className='font-bold text-4xl mt-10'>{formatTime(timeLeft)}</p>
      </div>
   );
};

export default TimerCountdown;
