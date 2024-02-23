/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Link } from 'react-router-dom'
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import BookSingleCard from './BookSingleCard';


const BookCard = ({books}) => {
  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
      {/* {books[0].publishYear} */}
      {books.map((item,index)=>(
        <BookSingleCard key={item._id} item={item}/>
      ))}
          
      
    </div>    
  )
}

export default BookCard