import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const IconSpan = styled.span`
    display: flex;
    justify-content: space-evenly;
    font-size: 1rem;
    color: #84CEEB;
    padding: 0 0.5rem;
    margin: 0 auto;
    span {
        padding: 1rem;
        border: 1px solid blue;
        margin: 1rem;
    }

`
const clickhandler = (e) => {
    console.log(e)
    document.getElementById("lol").style.color === "lightblue" ? document.getElementById("lol").style.color = "yellow" : document.getElementById("lol").style.color = 'lightblue'
}
const clickhandler1 = (e) => {
    console.log(e)
    document.getElementById("lol1").style.color === "lightblue" ? document.getElementById("lol1").style.color = "yellow" : document.getElementById("lol1").style.color = 'lightblue'
}
const clickhandler2 = (e) => {
    console.log(e)
    document.getElementById("lol2").style.color === "lightblue" ? document.getElementById("lol2").style.color = "yellow" : document.getElementById("lol2").style.color = 'lightblue'
}


export const NavComponent = () => {
    return (
        <IconSpan>

            <span id="lol" onClick={clickhandler}>
                <NavLink to='/'><i className="fas fa-home"></i></NavLink>
            </span>

            <span id="lol1" onClick={clickhandler1}>
                <NavLink to='/contact'><i className="fas fa-address-card"></i></NavLink>
            </span>
            <span id="lol2" onClick={clickhandler2}>
                <NavLink to='/about'><i className="fas fa-question"></i></NavLink>
            </span>

        </IconSpan>
    )
}