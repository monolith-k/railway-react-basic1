// App.js
import React from 'react';
import ThreadList from './components/ThreadList';
import Header from './components/Header';
// import BtnPost from './components/BtnPost';

const App = () => {
  return (
    <>
    <div className="container mx-auto max-w-screen-lg">
      <Header />
      <ThreadList />
    </div>
    <div className="fixed bottom-0 right-0 mr-4 mb-4">
      {/* <BtnPost /> */}
    </div>
    </>
  );
};

export default App;