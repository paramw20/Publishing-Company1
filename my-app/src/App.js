import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Page1 from './pages/Page1/Page1';
import Page2 from './pages/Page2/Page2';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" exact element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
