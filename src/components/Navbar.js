import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navigation'>
        <div className='logo'>
          <h1>Notes App</h1>
        </div>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/archived'>Archived</Link></li>
          <li><Link to='/add'>Add</Link></li>
          <li><Link to='/search'>Search</Link></li>
        </ul>
    </div>
  )
}
