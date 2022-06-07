import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutPage from './pages/about-page/AboutPage';
import TermsOfUse from './pages/terms-of-use/TermsOfUse';
import Feedback from './pages/feedback/Feedback';
import Advertising from './pages/advertising/Advertising';
import './index.css';
import App from './components/app/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/terms' element={<TermsOfUse/>}/>
      <Route path='/feedback' element={<Feedback/>}/>
      <Route path='/advertising' element={<Advertising/>}/>
  </Routes>
</BrowserRouter>
);

