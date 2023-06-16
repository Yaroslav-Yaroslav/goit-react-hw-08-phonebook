import styled from 'styled-components';

export const List = styled.ul`
  width: 700px;
  margin: 20px auto;
`;
export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
export const Button = styled.button`
  cursor: pointer;
  max-width: 200px;
  padding: 5px 30px;
  display: flex;
  gap: 10px;
  border: none;
  align-items: center;
  font-size: 14px;
  justify-content: center;
  color: #fff;
  background-color: #277a9d;
  border-radius: 5px;
  &:hover,
  &:focus {
    color: #212121;
  }
`;

export const Info = styled.p`
  width: 700px;
  margin: 0 auto;
`;
