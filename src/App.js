import React from 'react';
import Header from './components/Header/Header';
import VideoProvider from './context/VideoContextProvider';
import './App.css';
import Footer from './components/Footer/Footer';
import Banner from './components/Banner/Banner';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VideoList from './components/VideoList/VideoList';
import VideoForm from './components/VideoForm/VideoForm';
import Page404 from './components/Page404/Page404';

const App = () => (
  <VideoProvider>
    <Router>
      <Header />
      <Banner />
      <Routes>
        <Route path="/" element={<VideoList />} />
        <Route path="/add" element={<VideoForm />} />
        {/* <Route path="*" element={<Page404 />} /> */}
      </Routes>
      <Footer />
    </Router>
  </VideoProvider>
);

export default App;