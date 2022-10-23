import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Add from './pages/Add'
import Detailed from './pages/Detailed';
import { getAllNotes } from './utils/local-data';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      notes: getAllNotes()
    }

    this.onAddNotes=this.onAddNotes.bind(this);
  }

  onAddNotes(newtitle,newbody){
    let time = +new Date();
    this.setState(
      {
        notes:[...this.state.notes, {id:time,title:newtitle,body:newbody,createdAt:time}]
      }
      );
    console.log(this.state.notes);
  }

  render(){
    return(
      <div className="app-container">
        <header>
          <Navbar/>
        </header>
        <main>
          <Routes>
            <Route path='/detailed' element={<Detailed></Detailed>}></Route>
            <Route path='/' element={<Add notes={this.state.notes} onAddNotes={this.onAddNotes}></Add>}></Route>
          </Routes>
        </main>
      </div>
    );
  }
}

export default App;
