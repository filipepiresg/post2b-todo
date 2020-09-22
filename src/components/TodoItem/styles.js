import styled from 'styled-components';

export const Container = styled.div`
  /* display: flex;
  align-items: center; */
  margin: 5px 0;
  box-sizing: content-box;
  :hover {
    background-color: #c6ebbe;
    cursor: pointer;
  }
`;

export const Content = styled.div`
  /* display: flex; */
  /* flex: 1; */
  /* border: 1px solid black; */
  /* width: 100%; */
  /* display: inline-flex;
  flex: 1; */
  /* align-items: stretch; */
`;

export const Item = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 10px;
  min-height: 60px;
  flex-wrap: wrap;
  overflow-wrap: break-word;
`;

export const Input = styled.input`
  padding: 10px;
`;

export const InfoTitle = styled.h2`
  font-weight: 700;
  font-size: 18px;
  margin: 0;
`;

export const InfoDescription = styled.p`
  font-weight: 300;
  font-size: 14px;
  margin: 0;
`;
