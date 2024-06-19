import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  to {
    transform: rotate(1turn)
  }
`;

const MySpinner = styled.div`
  margin: 5rem auto;
  border-radius: 20%;
  width: 6.5rem;
  aspect-ratio: 1;
  background: radial-gradient(farthest-side, var(--color-brand7) 90%, #0000)
      top/10px 10px no-repeat,
    conic-gradient(#0000 30%, var(--color-brand5));
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 10px), #000 0);
  animation: ${rotate} 1.5s infinite linear;
`;

export default MySpinner;
