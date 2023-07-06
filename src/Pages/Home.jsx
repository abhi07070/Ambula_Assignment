import React from 'react'
import { TodoWrapper } from '../components/ToDoList/TodoWrapper'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className='section1'>
        <div className='detail'>
          <h2>Welcome to the given assignment !</h2>
          <p>Thank you for shortlisting me for the role of frontend developer intern</p>
          <div className='shopping'>
            <span>Click here: </span> <Link><a to="/cartdetail">Shopping Cart</a></Link>
          </div>
        </div>
      </div>
      <TodoWrapper />
    </>
  )
}

export default Home
