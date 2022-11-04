import React from 'react';
import NavBar from './components/header-components/navbar';
import RouteProvider from './components/routes/route-provider';

const App = () => (
  <>
    <NavBar />
    <RouteProvider />
  </>
)

export default App;