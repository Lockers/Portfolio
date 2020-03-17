import React from 'react';
import { Nav } from './Nav';
import styled from 'styled-components';

const Head = styled.header`
    display: flex;
    background-color: #5680E9;
`

export const Header = () => {
    return (
        <Head>
            <Nav />
        </Head>
    )
}