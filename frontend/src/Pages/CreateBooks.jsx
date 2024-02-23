/* eslint-disable no-unused-vars */
import React from 'react'
import BackButton from '../Components/BackButton'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../Components/Spinner';

const CreateBooks = () => {

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const saveBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .post('http://localhost:5555/books', data)
      .then((Response) => {
        setLoading(false);
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        console.error("ERROR")
        console.log(error);
      })

  }



  return (
    <div className='p-4'>
      <BackButton />

      {(loading) ?
        (
          <Spinner />
        ) :
        (
          <div className='flex flex-col items-center'>
            <h1 className=" text-3xl my-4 mx-4">Create Book</h1>
            <div className="flex-col items-center border-2 border-sky-400 rounded-xl w-fit  mx-2">
              <div>
                <span className='text-2xl mx-3'>Enter Title: </span>
                <input type="text" onChange={(e) => { setTitle(e.target.value) }} className='bg-gray-100 rounded-lg w-fit my-3 p-1 mx-3 text-2xl' placeholder='Enter Title' />
              </div>
              <div>
                <span className='text-2xl mx-3'>Enter Author: </span>
                <input type="text" onChange={(e) => { setAuthor(e.target.value) }} className='bg-gray-100 rounded-lg w-fit my-3 p-1 mx-3 text-2xl' placeholder='Enter Author' />
              </div>
              <div>
                <span className='text-2xl mx-3'>Enter Publish Year: </span>
                <input type="number" onChange={(e) => { setPublishYear(e.target.value) }} className='bg-gray-100 rounded-lg w-fit my-3 p-1 mx-3 text-2xl' placeholder='Enter Publish Year' />
              </div>
              <div className='flex flex-col items-center'>
                <button onClick={saveBook} className='bg-green-500 text-2xl rounded-lg w-fit my-3 p-1 mx-3 '>Submit</button>
              </div>
            </div>
          </div>
        )}

    </div>
  )
}

export default CreateBooks