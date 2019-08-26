import React from 'react';
import styled from 'styled-components';
import {Route, Switch} from 'react-router-dom';

import MainPage from './pages/main';
import ErrorPage from './pages/error';
import HeaderContainer from './containers/header/HeaderContainer';

const Entrance = styled.div`
  display: flex;
  flex-flow: column;
  background-color: papayawhip;
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <Entrance>
      <HeaderContainer/>      
      <Switch>
        <Route exact path="/" component={MainPage}/>
        <Route component={ErrorPage}/>
      </Switch>
    </Entrance>
  );
}

export default App;
