import React, { useState, useEffect } from 'react';

function Timer() {
  // State to store the time (in seconds)
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Set up a timer that increments the seconds every second
    const timerId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000); // Update every 1000 milliseconds (1 second)
    // Clean up the timer when the component is unmounted or when the effect is cleaned up
    return () => clearInterval(timerId);
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div>
      <h1>Timer: {seconds} seconds</h1>
    </div>
  );
}

export default Timer;