import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navigation'>
        <h1>Notes App</h1>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/add'>Add</Link></li>
          <li><Link to='/search'>Search</Link></li>
        </ul>
    </div>
  )
}
