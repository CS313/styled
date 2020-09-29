import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  from { transform: translate(0,0) }
  25% { transform: translate(20px,20px) }
  50% { transform: translate(40px,0px) }
  75% { transform: translate(20px,20px) }
  to { transform: translate(0,0) }
`;

export const Wrapper = styled.div`
  width: calc(100vw - 40px);
  height: calc(100vh - 40px);
  padding: 20px;
  display: flex;
  justify-content: center;
`;

export const AnimatedText = styled.p`
  font-size: 2em;
  color: palevioletred;
  text-shadow: 10px 10px 20px red;
  cursor: default;

  animation: ${animation} 5s ease-in-out infinite;
`;

export const ThemedWrapper = styled.div`
  width: 100%;
  border: ${props => `1px solid ${props.theme.colors.lightBlue}`};
  background-color: ${props => props.theme.colors.lightBlue};
  font-family: ${props => props.theme.fonts[0]};
`;
