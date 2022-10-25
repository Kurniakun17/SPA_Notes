import React from 'react'
import NoteItem from './NoteItem';
import {PropTypes} from 'prop-types'

export default function NotesList({notes, DeleteNote, EditNote, ArchivedNote, UnarchivedNote, isSearch}) {
  return (
    <div className='notes-list'>
      {notes.length === 0 ?
      <div className="notes-list-empty">
        <p>Tidak ada catatan</p>
      </div>
      :
      notes.map((note)=>(
        <NoteItem key={note.id} DeleteNote={DeleteNote} isSearch={isSearch} EditNote={EditNote} ArchivedNote={ArchivedNote} UnarchivedNote={UnarchivedNote} {...note}></NoteItem>
      ))}
    </div>
  )
}

NotesList.propTypes={
  notes: PropTypes.array.isRequired,
  isSearch: PropTypes.bool,
  ArchivedNote: PropTypes.func,
  UnarchivedNote: PropTypes.func,
  DeleteNote: PropTypes.func,
  EditNote: PropTypes.func,
}