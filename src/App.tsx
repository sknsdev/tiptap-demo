import React from 'react';
import Editor from './Editor';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <h1>Tiptap Editor Demo</h1>
      <Editor />
    </div>
  );
};

export default App;
