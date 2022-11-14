import React from 'react'
import './App.css';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage';

function App() {

    return (
    <div className="App">
        <Header/>
        <div className='app-body'>
          <HomePage/>
        </div>
    </div>
  );
}

export default App;
