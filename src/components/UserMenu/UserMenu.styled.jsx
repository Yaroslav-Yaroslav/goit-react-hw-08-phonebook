import styled from 'styled-components';

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const Button = styled.button`
  max-width: 200px;
  padding: 8px 30px;
  display: flex;
  gap: 10px;
  border: none;
  align-items: center;
  font-size: 16px;
  justify-content: center;
  color: #fff;
  background-color: #277a9d;
  border-radius: 50px;
  &:hover,
  &:focus {
    color: #212121;
  }
`;
