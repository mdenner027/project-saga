import React from 'react';
import { ToastContainer } from 'react-toastify';
import Routes from './Routes';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <React.Fragment>
      <Routes />
      <ToastContainer />
    </React.Fragment>
  );
}

export default App;
