import React from 'react';
import styled from 'styled-components';
import { NavComponent } from './NavComponent';

const Navi = styled.nav`
    display: flex;
`

export const Nav = () => {
    return (
        <Navi>
           <NavComponent />
        </Navi>
    )
}