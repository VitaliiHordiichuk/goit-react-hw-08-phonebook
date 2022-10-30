import styled from '@emotion/styled'

export const Li =styled.li`
    position: relative;
`

export const Button = styled.button`
position: absolute;
top: 0;
right: 50px;
border: none;
outline: 1px solid black;
border-radius: 5px;
cursor: pointer;
  &:hover, &:focus{
        background-color: #5860f7;
        color: white;
    }
`

export const Ul = styled.ul`
    margin-left: 50px;
`