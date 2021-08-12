import React,{useEffect , useState} from 'react';
import '../index.css';

function Countdown() {
    const calculateTimeLeft = () => {
      let year = new Date().getFullYear();
      const difference = +new Date(`${year}-08-15`) - +new Date();
      let timeLeft = {};
  
      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
  
      return timeLeft;
    };
  
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [year] = useState(new Date().getFullYear());
  
    useEffect(() => {
      setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
    });
  
    const timerComponents = [];
  
    Object.keys(timeLeft).forEach((interval) => {
      if (!timeLeft[interval]) {
        return;
      }
  
      timerComponents.push(
        <div className="font-extrabold text-3xl font-sans transform skew-x-6 text-white inline-block select-none">
          {timeLeft[interval]} {interval}{" "}
        </div>
      );
    });
    return (
      <div>
        <h1 className="font-semibold text-xl font-sans transform -skew-x-6 text-white select-none"> Get Ready for the Website Deadline!! </h1>
        {timerComponents.length ? timerComponents : <span>LMAOOOOO</span>}
      </div>
    );
  }
  
  export default Countdown;
