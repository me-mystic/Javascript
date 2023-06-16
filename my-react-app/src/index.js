import React from 'react';
import ReactDOM from 'react-dom/client';

// css
import './index.css';
// pages
import Header from './Header'
import MainContent from './MainContent'
import Footer from './Footer';
function Page() {
  return (
    <>
      <Header />
      <MainContent/>
      <Footer/>
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Page />
)