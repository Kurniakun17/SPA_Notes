import React from 'react';
import FormInput from '../components/FormInput';
import { useParams } from 'react-router-dom';
import { getNote } from '../utils/local-data';
import { useNavigate } from 'react-router-dom';

function EditPageWrapper({EditNote}){
  let {id} = useParams();
  let note = getNote(id);
  const navigate = useNavigate();

  return <Edit EditNote={EditNote} navigate={navigate} {...note}></Edit>
}

class Edit extends React.Component{
  constructor(props){
    super(props);

    this.state={
      title:this.props.title,
      body:this.props.body,
    }
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onBodyChange = this.onBodyChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onTitleChange(e){
    this.setState({title:e.target.value})
  }

  onBodyChange(e){
    this.setState({body:e.target.value})
  }

  onSubmit(e){
    e.preventDefault();
    let note = {id:this.props.id, title:this.state.title,body:this.state.body}
    this.props.EditNote(note);
    this.props.navigate('/');
  }

  render(){
    return(
      <div className='edit'>
        {this.props.title === undefined?<div className="notes-list-empty">
                        <p>Kosong</p>
                    </div>:<FormInput titleState={this.state.title} bodyState={this.state.body} onTitleChange={this.onTitleChange} onBodyChange={this.onBodyChange} onSubmit={this.onSubmit}>
        </FormInput> }
        
      </div>
    );
  }
}

export default EditPageWrapper;
