import React from 'react'
import NoteItem from './NoteItem';

export default function NotesList({notes, DeleteNote, EditNote, isSearch}) {
  return (
    <div className='notes-list'>
      {notes.length === 0 ?
      <div className="notes-list-empty">
        <p>Kosong</p>
      </div>
      :
      notes.map((note)=>(
        <NoteItem key={note.id} title={note.title} DeleteNote={DeleteNote} isSearch={isSearch} EditNote={EditNote} {...note}></NoteItem>
      ))}
    </div>
  )
}
