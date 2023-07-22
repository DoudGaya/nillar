'use client'
import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 14); 

    const intervalId = setInterval(() => {
      const now = new Date();
      // @ts-ignore
      const timeRemaining = targetDate - now;

      if (timeRemaining <= 0) {
        clearInterval(intervalId);
        setCountdown(0);
      } else {
        setCountdown(timeRemaining);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (time: any) => {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);

    return `${days}days ${hours}hours ${minutes}min ${seconds}sec`;
  };

  return (
    <div>
      {countdown > 0 ? (
       <div className=" space-y-4 flex flex-col items-center lg:items-start">
        <p className=' text-xl lg:text-2xl'> Launches in </p>
        <p className=' font-read text-2xl lg:text-6xl text-[#241d03] '>{formatTime(countdown)}</p>
       </div>
      ) : (
        <p className='font-read'>Launch Date ✈️</p>
      )}
    </div>
  );
};

export default CountdownTimer;
