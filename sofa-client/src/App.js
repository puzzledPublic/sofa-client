import React from 'react';
import styled from 'styled-components';
import {Route, Switch} from 'react-router-dom';

import MainPage from './pages/main';
import ErrorPage from './pages/error';

const Entrance = styled.div`
  display: flex;
  flex-flow: column;
  background-color: papayawhip;
  width: 100%;
  height: 100%;
  
  border-bottom: 1px solid black;
`;

function App() {
  return (
    <Entrance>
      <Switch>
        <Route exact path="/" component={MainPage}/>
        <Route component={ErrorPage}/>
      </Switch>
    </Entrance>
  );
}

export default App;
