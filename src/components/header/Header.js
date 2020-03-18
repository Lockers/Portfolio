import React from 'react';
import { Nav } from './Nav';
import styled from 'styled-components';

const Head = styled.header`
    display: flex;
    background-color: #5680E9;
    width: 360px;
    justify-content: center;
    margin: 0 auto;
`

export const Header = () => {
    return (
        <Head>
            <Nav />
        </Head>
    )
}