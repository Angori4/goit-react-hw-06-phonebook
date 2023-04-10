import styled from "styled-components";

export const FormStyled= styled.form`
display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 30px 0px;
  padding: 10px;
  width: 400px;
  border: 1px solid black;
`

export const FormBtn = styled.button`
width: 150px;
  padding: 10px 15px;
  text-transform: capitalize;
  font-size: 16px;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  cursor: pointer;
  background-color: #C3C1C1;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: #00CCCC;
  }
`
export const LabelStyled = styled.label`
display:flex;
gap: 5px;
flex-direction:column;
`
export const InputStyled = styled.input`
padding-left:10px;
height:40px;
border-radius:6px;
max-width:420px; 
transition: all .2s ease-in-out;

&:focus{
    transform: scale(1.02);
    box-shadow: 5px 5px 5px grey;
}
`
