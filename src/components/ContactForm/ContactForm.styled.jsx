import styled from '@emotion/styled'

export const Form = styled.form`
    padding: 20px;
    width: 300px;
    max-width: 100%;
    padding: 50px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 30px;
box-shadow: 1px -1px 9px 0px rgba(0,0,0,0.75);
`
export const Label = styled.label`
    display: flex;
    flex-direction: column;
`

export const Input = styled.input`
    width: 150px;

`

export const Button = styled.button`
    width: 100px;
    border: none;
    outline: 1px solid black;
    border-radius: 5px;
    padding: 2px 5px;
    cursor: pointer;
    &:hover, &:focus{
        background-color: #5860f7;
        color: white;
    }
`







