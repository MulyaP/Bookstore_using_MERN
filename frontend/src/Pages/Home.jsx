/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from '../Components/Spinner.jsx';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import BookTable from '../Components/home/BookTable.jsx';
import BookCard from '../Components/home/BookCard.jsx';


const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('Table');

  useEffect(() => {
    setLoading(true);
    axios.get('http://localhost:5555/books')
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      })
  }, [])

  return (
    <div className='p-4'>
      <div className="flex justify-center items-center gap-x-4">
        <button className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg" onClick={ () => setShowType('Table')}>Table</button>
        <button className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg" onClick={ () => setShowType('Card')}>Card</button>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8"> Books List </h1>
        <Link to='/books/create'>
          <MdOutlineAddBox className='text-sky-800 text-4xl' />
        </Link>
        </div>
        {loading ? (
          <Spinner />
        ) : (
          showType === 'Table' ? (<BookTable books={books} />) : (<BookCard books={books} />)
        )}

    </div>
  )
}

export default Home