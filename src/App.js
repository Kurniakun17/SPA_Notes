import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Add from './pages/Add'
import Home from './pages/Home';
import { getAllNotes, addNote } from './utils/local-data';
import {PropTypes} from 'prop-types';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      notes: getAllNotes(),
      search:'',
    }

    this.onAddNotes=this.onAddNotes.bind(this);
    this.onSearch=this.onSearch.bind(this);
  }

  onAddNotes(state){
    addNote(state);
    this.setState(
      {notes:getAllNotes()}
    );
  }

  onSearch(e){
    console.log(e.target.value);
    console.log(this.state);
    this.setState(
        {
          search:e.target.value
        }
    )
  }

  render(){
    const notes = this.state.notes.filter((note) => {
      return note.title.toLowerCase().includes(
        this.state.search.toLowerCase()
      )
    })
    return(
      <div className="app-container">
        <header>
          <Navbar/>
        </header>
        <main>
          <Routes>
            <Route path='/' element={<Home notes={notes} searchState ={this.state.search} onSearch={this.onSearch}></Home>}></Route>
            <Route path='/add' element={<Add onAddNotes={this.onAddNotes}></Add>}></Route>
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

Add.propTypes = {
  onAddNotes : PropTypes.func.isRequired,
}