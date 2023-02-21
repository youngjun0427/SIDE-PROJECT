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

export const spin = keyframes`
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
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

export const blinkEffect = keyframes`
  50% {
    opacity: 0;
  }
`;
