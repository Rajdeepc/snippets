import React from 'react'
import './App.css'
import EditorContainer from './containers/EditorContainer';
import Questions from './containers/Questions';


function App() {
  return (
    <div className="App">
      <div className="grid-container">
        <div className="grid-item grid-item-1"></div>
        <div className="grid-item grid-item-2"></div>
        <div className="grid-item grid-item-3">
          <div className="grid-item grid-item-header"></div>
          <div className="grid-item grid-item-left">
            <Questions />
          </div>
          <div className="grid-item grid-item-right">
            <EditorContainer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
