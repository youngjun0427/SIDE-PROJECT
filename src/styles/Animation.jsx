import { keyframes } from 'styled-components';

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const fadeOut = keyframes`
  65% {
    opacity: 1;
  }

100% {
    opacity: 0;
  }
`;

export const motion = keyframes`
0% {
  transform: translateY(0);
}

100% {
  transform: translateY(1rem);
}
`;

export const blink = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;
