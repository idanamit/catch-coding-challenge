import React from 'react';
import './App.css';
import Header from "./components/header/Header";

const App: React.FC = () => {
  return (
    <div className="App">
      Template Project
        <Header query={"test"} total={100} currPage={1} pages={4}/>
    </div>
  );
};

export default App;
