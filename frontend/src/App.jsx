/* eslint-disable no-unused-vars */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CreateBooks from './Pages/CreateBooks.jsx';
import DeleteBook from './Pages/DeleteBook.jsx';
import EditBook from './Pages/EditBook.jsx';
import ShowBook from './Pages/ShowBook.jsx';
import Home from './Pages/Home.jsx';


const App = () => {
  return (
    <div>
    <Routes>
      <Route path='/' element = {<Home/>} />
      <Route path='/books/create' element={<CreateBooks/>} />
      <Route path='/books/details/:id' element={<ShowBook/>} />
      <Route path='/books/edit/:id' element={<EditBook/>} />
      <Route path='/books/delete/:id' element={<DeleteBook/>} />
    </Routes>
    </div>
  )
}

export default App