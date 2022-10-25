import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function DeleteButton({id,DeleteNote}) {
  const navigate = useNavigate();

  function onDeleteClick(){
    DeleteNote(id);
    navigate('/');
  }

  return (
    <input className='button' type='submit' value='Delete' onClick={onDeleteClick}></input>
  )
}
