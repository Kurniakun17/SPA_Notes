import React from 'react'

export default function Searchbar({searchState, onSearch, onSearchSubmit,changeSearchParams}) {
    function onSubmit(e){
        e.preventDefault();
        changeSearchParams(searchState);
        onSearchSubmit();
    }

    return (
        <div className='search-bar'>
            <form onSubmit={onSubmit}>
                <input className="searchbar" type='text' placeholder="'Babel'" value={searchState} onChange={onSearch}></input>
                <input type="submit" value='Search'></input>
            </form>
        </div>
    )
}
