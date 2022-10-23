import React from 'react'
import NoteItem from './NoteItem';

export default function NotesList({notes, searchState}) {
  return (
    <div className='notes-list'>
      {notes === 0?
      <div className="notes-list-empty">
        <p>Kosong</p>
      </div>
      :
      notes.map((note)=>(
        <NoteItem key={note.id} title={note.title} {...note}></NoteItem>
      ))}
    </div>
  )
}
