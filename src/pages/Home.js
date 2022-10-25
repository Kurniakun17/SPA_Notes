import React from 'react'
import NotesList from '../components/NotesList'

export default function Home({notes, searchState, DeleteNote, EditNote}) {
  return (
    <div className='home'>
        <h1>Notes</h1>
        <NotesList notes={notes} DeleteNote={DeleteNote} EditNote={EditNote} searchState={searchState}></NotesList>
    </div>
  )
}
