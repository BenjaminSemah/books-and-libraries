import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Categories from './components/Categories';
import Books from './components/Books';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}
