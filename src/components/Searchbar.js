import React from 'react'
import { PropTypes } from 'prop-types';

export default function Searchbar({searchState, onSearch, onSearchSubmit, changeSearchParams}) {
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

Searchbar.propTypes={
    searchState: PropTypes.string.isRequired,
    onSearch: PropTypes.func.isRequired,
    onSearchSubmit: PropTypes.func.isRequired,
    changeSearchParams: PropTypes.func.isRequired,
}

