import styled, {css} from 'styled-components';

const blackStyle = css`
    color: #fff;
    background-color: #333;
    &:hover{
        color: #333;
        border: 1px solid #333;
    }
`

const blueStyle = css`
    color: #fff;
    background-color: #2998ff;
    &:hover{
        color: #2998ff;
        border: 1px solid #2998ff;
    }
`

const getStyle = props => {
    if(props.black)
        return blackStyle;
    else if(props.blue)
        return blueStyle
}

export const ButtonContainer = styled.button`
    text-transform: uppercase;
    padding: 2rem;
    border: none;
    background-color: transparent;
    cursor: pointer;
    border: 1px solid #eee;
    width: 80%;
    &:hover{
        background-color:  #fff;
    }
    ${getStyle}
`