import React, { useState, useEffect } from 'react';

export default function FunctionalComponent() {
  const [time, setTime] = useState(new Date());

  const tick = () => {
    setTime(new Date());
  };

  useEffect(() => {
    // componentDidMount
    const interval = setInterval(() => {
      tick();
    }, 1000);

    return () => {
      // conponentWillUnmount
      clearInterval(interval);
    };
  }, [time]);

  return (
    <div>
      <h1>Hello, world! It's Funtional</h1>
      <h2>It is {time.toLocaleTimeString()}.</h2>
    </div>
  );
}
