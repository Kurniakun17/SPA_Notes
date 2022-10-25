import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { getAllNotes, addNote, editNote, deleteNote, archiveNote, unarchiveNote} from './utils/local-data';

import SearchPageWrapper  from './pages/Search';
import DetailedItem from './pages/DetailedItem';
import AddPageWrapper from './pages/Add';
import EditPageWrapper from './pages/Edit';
import ErrorNotFound from './pages/ErrorNotFound';
import Archived from './pages/Archived';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      notes: getAllNotes(),
    }

    this.onAddNotes=this.onAddNotes.bind(this);
    this.filteredNotes = this.filteredNotes.bind(this);
    this.onEditNote = this.onEditNote.bind(this);
    this.onArchivedNote = this.onArchivedNote.bind(this);
    this.onUnarchivedNote = this.onUnarchivedNote.bind(this);
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
    deleteNote(id);
    this.setState({
      notes:getAllNotes()
    })
  }

  onArchivedNote(id){
    archiveNote(id);
    this.setState({notes:getAllNotes()});
  }

  onUnarchivedNote(id){
    unarchiveNote(id);
    this.setState({notes:getAllNotes()})
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
            <Route path='/search' element={<SearchPageWrapper notes={this.state.notes} filteredNotes={this.filteredNotes}></SearchPageWrapper>}></Route>
            <Route path='/archived' element={<Archived notes={this.state.notes} DeleteNote={this.onDeleteNote} EditNote={this.onEditNote} UnarchivedNote={this.onUnarchivedNote}></Archived>}></Route>
            <Route path='/note/:id' element={<DetailedItem DeleteNote={this.onDeleteNote} EditNote={this.onEditNote}/>}></Route>
            <Route path='/edit/:id' element={<EditPageWrapper EditNote={this.onEditNote}></EditPageWrapper>}></Route>
            <Route path='/' element={<Home notes={this.state.notes} DeleteNote={this.onDeleteNote} EditNote={this.onEditNote} ArchivedNote={this.onArchivedNote}></Home>}></Route>
            <Route path='*' element={<ErrorNotFound></ErrorNotFound>}></Route>
          </Routes>
        </main>
      </div>
    );
  }
}

export default App;

