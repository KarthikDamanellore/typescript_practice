import React from 'react';
import './App.css';
import ArrayContextProvider from './components/Hello/ArrayContext';
import ArrayDataDisplay from './components/ArrayDataDisplay';
import { ArrayObjectContextProvider } from './components/Hello/ArrayObjectContext';
import ArrayOfObjectDataDisplay from './components/Hello/ArrayOfObjectDataDisplay';


function App() {
  return (
 <div className="App">
    <ArrayObjectContextProvider>
      <ArrayContextProvider>
          <ArrayDataDisplay/>
          <ArrayOfObjectDataDisplay/>
      </ArrayContextProvider>
      </ArrayObjectContextProvider>
    </div>
  );
}

export default App;
