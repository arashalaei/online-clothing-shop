import styled, {css} from 'styled-components';
import {Link} from 'react-router-dom'; 

const LinkContaiinerStyles = css`
    color: #333;
`

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #999; 
    margin: 1rem;
    margin-bottom: 2rem;
    padding-bottom: 1rem;
`
export const HeaderListContainer = styled.ul`
    list-style: none;
    font-size: 1.6rem;
    margin-right: 1rem;
    display: flex;
    justify-content: flex-end;
` 

export const HeaderItemContainer = styled.li`
    padding: 1rem;
`

export const HeaderLinkContainer = styled(Link)`
    text-decoration: none;
    ${LinkContaiinerStyles};
`
export const HeaderDivContainer = styled.div`
    ${LinkContaiinerStyles};
    cursor: pointer;
`