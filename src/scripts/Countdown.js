import React , {useEffect, useState} from 'react';
import '../index.css';

const Countdown = () => {
    const calculateTimeLeft = () => {
        let year = new Date().getFullYear();
        let difference = +new Date(`10/07/${year}`) - +new Date();
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
    // if (!timeLeft[interval]) {
    //     return;
    // }
    
    timerComponents.push(
        <span>
        {timeLeft[interval]} {interval}{" "}
        </span>
    );
    });

    return (
        <div>
            {timerComponents.length ? timerComponents : <span>Vsportfest is now LIVE!</span>}
        </div>
    )
}

export default Countdown
