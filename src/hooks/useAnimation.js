import { useState, useCallback } from 'react';

export function useAnimation() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [speed, setSpeed] = useState('normal');

  const toggle = useCallback(() => {
    setIsPlaying(prev => !prev);
  }, []);

  const changeSpeed = useCallback((newSpeed) => {
    setSpeed(newSpeed);
  }, []);

  const speedMap = {
    slow: 2,
    normal: 1,
    fast: 0.5,
  };

  return {
    isPlaying,
    speed,
    speedMultiplier: speedMap[speed],
    toggle,
    changeSpeed,
  };
}
