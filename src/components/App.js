import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from './Homepage';
import Community from './Community';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route 
            path="/" 
            element={<Homepage />} 
          />
          <Route
            path="/community"
            element={<Community />}
          />
        </Routes>
      </Router>
    </>
  )
}

export default App;
