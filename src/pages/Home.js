import React from 'react'
import NotesList from '../components/NotesList'
import Searchbar from '../components/Searchbar'

export default function Home({notes, searchState, onSearch}) {
  return (
    <div className='home'>
        <h1>Notes</h1>
        <Searchbar searchState={searchState} onSearch={onSearch}></Searchbar>
        <NotesList notes={notes} searchState={searchState}></NotesList>
    </div>
  )
}
