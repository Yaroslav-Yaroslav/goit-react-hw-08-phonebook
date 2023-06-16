import { Form as FormikForm, ErrorMessage as FormikErrorMessage } from 'formik';
import styled from 'styled-components';

export const Form = styled(FormikForm)`
  width: 700px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const ErrorMessage = styled(FormikErrorMessage)`
  font-size: 14px;
  color: ${p => p.theme.colors.error};
`;
export const FormField = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const Button = styled.button`
  cursor: pointer;
  
  padding: 8px 30px;
  display: flex;
  gap: 10px;
  border: none;
  align-items: center;
  font-size: 16px;
  justify-content: center;
  color: #fff;
  background-color: #277a9d;
  border-radius: 5px;
  &:hover,
  &:focus {
    color: #212121;
  }
`;
