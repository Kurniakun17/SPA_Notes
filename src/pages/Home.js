import React from 'react'
import NotesList from '../components/NotesList'
import {PropTypes} from 'prop-types'

export default function Home({notes, DeleteNote, EditNote, ArchivedNote}) {
  notes = notes.filter((note)=>!note.archived)
  return (
    <div className='home'>
        <h1>Notes</h1>
        <NotesList notes={notes} DeleteNote={DeleteNote} EditNote={EditNote} ArchivedNote={ArchivedNote}></NotesList>
    </div>
  )
}

Home.propTypes={
  notes: PropTypes.array.isRequired,
  DeleteNote: PropTypes.func.isRequired,
  EditNote: PropTypes.func.isRequired,
  ArchivedNote: PropTypes.func.isRequired,
}