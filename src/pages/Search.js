import React from "react";
import Searchbar from "../components/Searchbar";
import NotesList from "../components/NotesList";
import {PropTypes} from 'prop-types';
import { useSearchParams } from "react-router-dom";

function SearchPageWrapper({notes, filteredNotes}){
    const [searchParams, setSearchParams] = useSearchParams();
    const title = searchParams.get('title');

    function changeSearchParams(keyword){
        setSearchParams({title:keyword})
    }

    return <Search notes={notes} title={title} changeSearchParams={changeSearchParams} filteredNotes={filteredNotes}></Search>
}

class Search extends React.Component{
    constructor(props){
        super(props);

        this.state={
            search: this.props.title || '',
            foundedMovies:this.props.filteredNotes(this.props.title || ''),
        }

        this.onSearch = this.onSearch.bind(this);
        this.onSearchParams = this.onSearchParams.bind(this);
        this.onDeleteSearch = this.onDeleteSearch.bind(this);
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
    }

    onSearch(e){
        this.setState(
            {
                search:e.target.value
            }
        )
    }

    onSearchSubmit(){
        this.setState(
            {
                foundedMovies:this.props.filteredNotes(this.state.search.toLowerCase())
            }
        );
        this.props.changeSearchParams(this.state.search);
    }

    onDeleteSearch(id){
        this.props.DeleteNote(id);
        let notes = this.props.filteredNotes(this.state.search.toLowerCase())
        this.setState(
            {  
                foundedMovies:notes
            }
        );
    }

    onSearchParams(title){
        this.setState({title:title});
    }

    render(){
        return(
            <div className="search-page">
                <Searchbar searchState={this.state.search} onSearch={this.onSearch} onSearchSubmit={this.onSearchSubmit} changeSearchParams={this.props.changeSearchParams}></Searchbar>
                <NotesList notes={this.state.foundedMovies} isSearch={true}/>
            </div>
        );
    }
}

export default SearchPageWrapper;

SearchPageWrapper.propTypes={
    notes: PropTypes.array.isRequired,
    filteredNotes: PropTypes.func.isRequired,
}

Search.propTypes={
    notes: PropTypes.array.isRequired,
    title: PropTypes.string,
    changeSearchParams: PropTypes.func.isRequired,
    filteredNotes: PropTypes.func.isRequired,
}


