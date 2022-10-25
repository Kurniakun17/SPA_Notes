import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { getAllNotes, addNote, editNote} from './utils/local-data';
import {PropTypes} from 'prop-types';
import SearchPageWrapper  from './pages/Search';
import DetailedItem from './components/DetailedItem';
import AddPageWrapper from './pages/Add';
import EditPageWrapper from './pages/Edit';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      notes: getAllNotes(),
    }

    this.onAddNotes=this.onAddNotes.bind(this);
    this.filteredNotes = this.filteredNotes.bind(this);
    this.onEditNote = this.onEditNote.bind(this);
    this.onDeleteNote = this.onDeleteNote.bind(this);
  }

  onAddNotes(state){
    addNote(state);
    this.setState(
      {notes:getAllNotes()}
    );
  }

  onEditNote(note){
    editNote(note);
  }

  onDeleteNote(id){
    let notes = this.state.notes.filter((note)=>note.id!==id);
    this.setState({notes});
  }

  filteredNotes(titleSearch){
    let notes = this.state.notes;
    if(!titleSearch){
      return notes
    }
    let filtered = notes.filter((note)=>note.title.toLowerCase().includes(titleSearch));
    return filtered
  }

  render(){
    return(
      <div className="app-container">
        <header>
          <Navbar/>
        </header>
        <main>
          <Routes>
            <Route path='/add' element={<AddPageWrapper onAddNotes={this.onAddNotes}></AddPageWrapper>}></Route>
            <Route path='/search' element={<SearchPageWrapper notes={this.state.notes} filteredNotes={this.filteredNotes} DeleteNote={this.onDeleteNote}></SearchPageWrapper>}></Route>
            <Route path='/note/:id' element={<DetailedItem DeleteNote={this.onDeleteNote} EditNote={this.onEditNote}/>}></Route>
            <Route path='/edit/:id' element={<EditPageWrapper EditNote={this.onEditNote}></EditPageWrapper>}></Route>
            <Route path='/' element={<Home notes={this.state.notes} searchState ={this.state.search} DeleteNote={this.onDeleteNote} EditNote={this.onEditNote}></Home>}></Route>
          </Routes>
        </main>
      </div>
    );
  }
}

export default App;


Home.propTypes={
    notes : PropTypes.array.isRequired,
}
