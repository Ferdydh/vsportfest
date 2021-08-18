import React , {useEffect, useState} from 'react';
import '../index.css';

const Countdown = () => {
    const calculateTimeLeft = () => {
        let year = new Date().getFullYear();
        let difference = +new Date(`09/20/${year}`) - +new Date();
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
    }   

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

    useEffect(() => {
        const timer = setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer)
      });

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
    //   if (!timeLeft[interval]) {
    //     return;
    //   }
  
      timerComponents.push(
          timeLeft[interval] +" " + interval +" "
      );
    });

    return (
      <div className="flex flex-wrap content-center justify-center">
        {timerComponents.length ?  <div>Registration closes in {timerComponents}</div>
        : <div>Vsportfest is now LIVE!</div>}
      </div>
    );
  }
  
  export default Countdown;
