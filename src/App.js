import React from 'react';
import './App.css';
import Header from './MyComponents/Header';
import Footer from './MyComponents/Footer';
import Feed from './MyComponents/Feed/Feed';

function App() {
  return (
    <div className="App">
      <Header/>
      <Feed/>
      <Footer/>
    </div>
  );
}

export default App;
