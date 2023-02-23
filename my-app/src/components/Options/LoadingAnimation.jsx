import React, { useState, useEffect } from 'react';
import { css } from 'styled-components';
import { blinkEffect } from '../../styles/Animation';

const BlinkingFishImg = ({ delay }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setVisible((prevVisible) => !prevVisible);
    }, delay);

    return () => clearInterval(intervalId);
  }, [delay]);

  const style = {
    width: '100px',
    height: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    visibility: visible ? 'visible' : 'hidden',
    animation: css`
      ${blinkEffect}
    ``1s ease-in-out infinite alternate;
    `,
  };

  return <div style={style}>BlinkingFishImg</div>;
};

export default BlinkingFishImg;
