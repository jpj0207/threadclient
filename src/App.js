import React from 'react';
import Home from './component/Home';
import ThreadList from './component/ThreadList';
import Thread from './component/Thread';
import PostThread from './component/PostThread';
import EmptyPage from './component/EmptyPage';

import './App.css';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/:board' element={<ThreadList/>}></Route>
        <Route path='/:board/thread/:id' element={<Thread/>}></Route>
        <Route path='/:board/write' element={<PostThread/>}></Route>
        <Route path="*" element = {<EmptyPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
