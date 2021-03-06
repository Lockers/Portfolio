import React from 'react';
import { Header } from './components/header/Header';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import { Home } from './components/home/Home';
import { About } from './components/about/About';
import { Contact } from './components/contact/Contact';


const Grid = styled.div`
  width: 360px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid red;
`

export const App = () => {
  return (
    <Grid>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Grid>
  );
}

