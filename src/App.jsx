import React,{ useState } from 'react'
import { BrowserRouter} from 'react-router-dom';
import Header from './components/Header/Header';


function App() {
  return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header/>
      </BrowserRouter>  
  );
}

export default App;
