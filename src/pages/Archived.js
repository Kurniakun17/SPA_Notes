import React from 'react'
import NotesList from '../components/NotesList'
import {PropTypes} from 'prop-types'

export default function Archived({notes, DeleteNote, EditNote, UnarchivedNote}) {
    notes = notes.filter((note)=> note.archived);
  return (
    <div className='archived'>
            <h1>Archived Notes</h1>
            <NotesList notes={notes} DeleteNote={DeleteNote} EditNote={EditNote} UnarchivedNote={UnarchivedNote}></NotesList>
    </div>
  )
}

Archived.propTypes={
    notes : PropTypes.array.isRequired,
    DeleteNote : PropTypes.func.isRequired,
    EditNote : PropTypes.func.isRequired,
    UnarchivedNote: PropTypes.func.isRequired,
}
