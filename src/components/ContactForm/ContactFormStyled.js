import styled from 'styled-components';
import { Form, Field } from 'formik';

export const MainForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 240px;
  padding: 20px;
  border-radius: 5px;
  background-color: grey;
  border: 1px solid black;
`;

export const Input = styled(Field)`
  border: 0;
  outline: 0;
  width: 100%;
  margin-bottom: 10px;
  padding: 5px;
  
`;

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 10px;
`;

export const AddButton = styled.button`
width: 160px;
height: 40px;
  border-radius: 20px;
  background-color: green;
  margin: 0 auto;
  padding: 10px 20px;
`;