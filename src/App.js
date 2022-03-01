import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Books from './components/Books';
import Categories from './components/Categories';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" exact element={<Books />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </Router>
);

export default App;
