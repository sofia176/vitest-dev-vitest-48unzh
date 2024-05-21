import React, { useEffect, useState } from 'react';
import { formatDuration } from './duration';

// Define the TimerProps interface to include the required props
interface TimerProps {
  minutes: number;
  seconds: number;
  onTimerComplete: () => void;
}

// Create the Timer component
const Timer: React.FC<TimerProps> = ({ minutes, seconds, onTimerComplete }) => {
  const [timeLeft, setTimeLeft] = useState(minutes * 60 + seconds);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timerId);
          onTimerComplete();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, [onTimerComplete]);

  const formatTimeLeft = () => {
    const mins = Math.floor(timeLeft / 60);
    const secs = timeLeft % 60;
    return formatDuration({ minutes: mins, seconds: secs });
  };

  return <h1>{formatTimeLeft()}</h1>;
};

export default Timer;

// Helper function to format the duration
export const formatDuration = ({
  minutes,
  seconds,
}: {
  minutes: number;
  seconds: number;
}): string => {
  const pad = (num: number) => String(num).padStart(2, '0');
  return `${pad(minutes)}:${pad(seconds)}`;
};
