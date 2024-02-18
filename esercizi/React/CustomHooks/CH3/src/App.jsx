import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { SWRConfig } from 'swr';
import Routes from './Routes';

const fetcher = (url) => fetch(url).then((res) => res.json());

const App = () => {
  return (
    <Router>
      <SWRConfig value={{ fetcher }}>
        <Routes />
      </SWRConfig>
    </Router>
  );
};

export default App;

