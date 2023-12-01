// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ThreadList from './components/ThreadList';
import Header from './components/Header';
import Post from './Post';

const App = () => {
  return (
    <Router>
      <div className="container mx-auto max-w-screen-lg">
        <Header />
        <Routes>
          <Route path="/thread/new" element={<Post />} />
          <Route path="/" element={<ThreadList />} />
        </Routes>
      </div>
      <div className="fixed bottom-0 right-0 mr-4 mb-4">
        {/* <BtnPost /> */}
      </div>
    </Router>
  );
};

export default App;