/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import react from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useAsyncError, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import BackButton from '../Components/BackButton';
import Spinner from '../Components/Spinner';




const EditBook = () => {

  const [title, setTitle] = useState();
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  let navigate = useNavigate();


  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setTitle(response.data.title);
        setAuthor(response.data.author);
        setPublishYear(response.data.publishYear);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      })
  }, [])

  let saveBook = () => {

    let data = {
      title,
      author,
      publishYear
    };
    setLoading(true);
    axios
      .put(`http://localhost:5555/books/${id}` , data)
      .then((response)=>{
        setLoading(false);
        alert("Edited Successfully");
        navigate('/')
      })
      .catch((error)=>{
        console.log("ERROR");
        setLoading(false);
      })


  }

  return (
    <div className='p-4'>
      <BackButton/>
      {
        (loading)?(
          <Spinner/>
        ):(
          <div className='flex flex-col items-center'>
            <h1 className=" text-3xl my-4 mx-4">Edit Book</h1>
            <div className="flex-col border-2 border-sky-400 rounded-xl w-fit  mx-2">
              <div>
                <span className='text-2xl mx-3'>Title: </span>
                <input type="text" onChange={(e) => { setTitle(e.target.value) }} className='bg-gray-100 rounded-lg w-fit my-3 p-1 mx-3 text-2xl' value={title} />
              </div>
              <div>
                <span className='text-2xl mx-3'>Enter Author: </span>
                <input type="text" onChange={(e) => { setAuthor(e.target.value) }} className='bg-gray-100 rounded-lg w-fit my-3 p-1 mx-3 text-2xl' value={author} />
              </div>
              <div >
                <span className='text-2xl mx-3'>Enter Publish Year: </span>
                <input type="number" onChange={(e) => { setPublishYear(e.target.value) }} className='bg-gray-100 rounded-lg w-fit my-3 p-1 mx-3 text-2xl' value={publishYear} />
              </div>
              <div className='flex flex-col items-center'>
                <button onClick={saveBook} className='bg-green-500 text-2xl rounded-lg w-fit my-3 p-1 mx-3'>Submit</button>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default EditBook