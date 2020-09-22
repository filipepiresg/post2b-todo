import styled from 'styled-components';

export const Container = styled.div`
  /* display: flex;
  flex-direction: column; */
  width: 25%;
  border-radius: 10px;
  padding: 10px;
  background-color: #fff;
  margin: 10px 0 0;
  position: relative;
`;

export const Title = styled.h2`
  text-align: center;
`;

export const Button = styled.button.attrs({
  type: 'button',
})`
  position: absolute;
  top: 17px;
  right: 10px;
  z-index: 10;
`;
