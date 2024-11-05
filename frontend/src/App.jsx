import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PrivacyPolicy from './pages/PrivacyPolicy'; 
import TermsCondition from './pages/TermsCondition';
import FAQS from './pages/FAQS';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-condition" element={<TermsCondition />} />
        <Route path="/frequently-asked-questions" element={<FAQS />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App