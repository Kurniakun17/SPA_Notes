import React from 'react'
import NoteItem from './NoteItem';

export default function NotesList({notes}) {
  return (
    <div className='notes-list'>
      {notes === 0?
      <div className="notes-list-empty">
        <p>Kosong</p>
      </div>
      :
      notes.map((note)=>(
        <NoteItem id={note.id} title={note.title} body={note.body} createdAt={note.createdAt}></NoteItem>
      ))}
    </div>
  )
}
