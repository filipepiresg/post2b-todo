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
  color: #334195;
`;

export const Button = styled.a`
  display: flex;
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 10;
  background-color: #334195;
  color: #fff;
  padding: 5px;
  height: 30px;
  width: 30px;
  font-weight: 700;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  :hover {
    cursor: pointer;
  }
`;
