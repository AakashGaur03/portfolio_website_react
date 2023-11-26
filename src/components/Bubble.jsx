import React, { useState, useEffect } from 'react';
import '../App.css';

const generateRandomPosition = () => ({
  x: Math.random() * window.innerWidth,
  y: Math.random() * window.innerHeight,
});

const BubbleAnimation = () => {
  const [bubbles, setBubbles] = useState(Array.from({ length: 150 }, generateRandomPosition));

  const handleMouseMove = (e) => {
    // Get the current position of the mouse cursor
    const cursorPosition = { x: e.clientX, y: e.clientY };
    setBubbles(bubbles.map((bubble) => ({
      ...bubble,
      isHovered: Math.abs(bubble.x - cursorPosition.x) < 200 &&
                 Math.abs(bubble.y - cursorPosition.y) < 200,
    })));
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [bubbles]);

  return (
    <>
    <div className='mainbubble'>
      {bubbles.map((bubble, index) => (
        <div
          key={index}
          className={`bubble ${bubble.isHovered ? 'hovered' : ''}`}
          style={{ left: bubble.x, top: bubble.y }}
        />
      ))}
      </div>
    </>
  );
};

export default BubbleAnimation;
