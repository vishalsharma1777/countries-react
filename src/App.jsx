import './App.css';
import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailsPage from './pages/DetailsPage';
import Header from './components/common/Header';
import ContextProvider from './contexts/ThemeContext';
import WrongRoute from './components/errorHandling/WrongRoute';






function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/country/:id" element={<DetailsPage />} />
          <Route path="*" element={<WrongRoute/>} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
