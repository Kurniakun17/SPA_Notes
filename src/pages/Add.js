import React from 'react'
import { useNavigate } from 'react-router-dom';

function AddPageWrapper({onAddNotes}){
  const navigate = useNavigate();
  return <Add navigate={navigate} onAddNotes={onAddNotes}></Add>
}

class Add extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: "",
      body: "",
      createdAt: "",
    }
  
    this.onSubmit = this.onSubmit.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onBodyChange = this.onBodyChange.bind(this);
  }

  onTitleChange(e){
    this.setState(
      {title:e.target.value}
      );
  }

  onBodyChange(e){
    this.setState(
      {body:e.target.value}
      );
  }

  onSubmit(e){
    e.preventDefault();
    this.props.onAddNotes(this.state);
    this.props.navigate('/');
  }

  render(){
    return (
    <div className='Add'>
      <div className='add-new-page-body'>
        <div className='add-new-page__input'>
            <form onSubmit={this.onSubmit}>
                <input className='add-new-page__input__title' placeholder="Masukkan Title" value={this.state.title} onChange={this.onTitleChange}></input>
                <textarea className='add-new-page__input__body' placeholder='Masukkan Body' value={this.state.body} onChange={this.onBodyChange}></textarea>
                <input type="submit" className='button'/>
            </form>
        </div>
      </div>
    </div>
  );
  }
}

export default AddPageWrapper;
