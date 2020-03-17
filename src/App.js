import React from 'react';
import { Header } from './components/header/Header';
import styled from 'styled-components';
import {Route} from 'react-router-dom';
import { Home } from './components/home/Home';
import { About } from './components/about/About';
import { Contact } from './components/contact/Contact';


const Grid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid red;
`

export const App = () => {
  return (
    <Grid>
      <Header />
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
    </Grid>
  );
}

