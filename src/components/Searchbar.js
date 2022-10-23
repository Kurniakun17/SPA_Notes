import React from 'react'

export default function Searchbar({searchState, onSearch}) {
    return (
        <div className='search-bar'>
            <input className="searchbar" type='text' placeholder="'Babel'" value={searchState} onChange={onSearch}></input>
        </div>
    )
}
