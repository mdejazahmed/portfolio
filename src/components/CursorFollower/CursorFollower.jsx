import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseenter', onMouseEnter);
      document.addEventListener('mouseleave', onMouseLeave);
      document.addEventListener('mousedown', onMouseDown);
      document.addEventListener('mouseup', onMouseUp);
      
      // Add hover state for links and buttons
      const elements = document.querySelectorAll('a, button, [data-cursor="link"]');
      elements.forEach(el => {
        el.addEventListener('mouseenter', onLinkHoverStart);
        el.addEventListener('mouseleave', onLinkHoverEnd);
      });
    };

    const removeEventListeners = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      
      const elements = document.querySelectorAll('a, button, [data-cursor="link"]');
      elements.forEach(el => {
        el.removeEventListener('mouseenter', onLinkHoverStart);
        el.removeEventListener('mouseleave', onLinkHoverEnd);
      });
    };

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);
    const onMouseLeave = () => setHidden(true);
    const onMouseEnter = () => setHidden(false);
    const onLinkHoverStart = (e) => {
      setLinkHovered(true);
      if (e.target.dataset.cursorText) {
        setText(e.target.dataset.cursorText);
      }
    };
    const onLinkHoverEnd = () => {
      setLinkHovered(false);
      setText('');
    };

    addEventListeners();
    return () => removeEventListeners();
  }, []);

  const cursorVariants = {
    default: {
      x: position.x - 15,
      y: position.y - 15,
      scale: linkHovered ? 2.5 : (clicked ? 0.9 : 1),
      opacity: hidden ? 0 : 1,
      transition: {
        type: 'spring',
        mass: 0.1,
        damping: 10,
        stiffness: 500,
      },
    },
  };

  const cursorDotVariants = {
    default: {
      x: position.x - 3,
      y: position.y - 3,
      scale: clicked ? 0.5 : 1,
      opacity: hidden ? 0 : 1,
    },
  };

  return (
    <>
      <motion.div
        className="cursor-dot"
        variants={cursorDotVariants}
        animate="default"
      />
      <motion.div
        className="cursor-outline"
        variants={cursorVariants}
        animate="default"
      >
        {text && (
          <span className="cursor-text">{text}</span>
        )}
      </motion.div>
      <style jsx global>{`
        * {
          cursor: none !important;
        }
        
        .cursor-dot {
          position: fixed;
          width: 6px;
          height: 6px;
          background-color: #fff;
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          mix-blend-mode: difference;
        }
        
        .cursor-outline {
          position: fixed;
          width: 30px;
          height: 30px;
          border: 2px solid rgba(255, 255, 255, 0.7);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9998;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: background-color 0.2s, border-color 0.2s, border-width 0.2s;
          mix-blend-mode: difference;
        }
        
        .cursor-outline.hover {
          transform: scale(2.5);
          background-color: rgba(255, 255, 255, 0.3);
          border-width: 1px;
        }
        
        .cursor-text {
          font-size: 12px;
          font-weight: 500;
          color: white;
          opacity: 0;
          transform: scale(0.5);
          transition: opacity 0.3s, transform 0.3s;
          white-space: nowrap;
          position: absolute;
          pointer-events: none;
        }
        
        .cursor-outline:hover .cursor-text {
          opacity: 1;
          transform: scale(1);
        }
        
        /* Disable custom cursor on mobile */
        @media (max-width: 768px) {
          * {
            cursor: auto !important;
          }
          
          .cursor-dot,
          .cursor-outline {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default CursorFollower;
