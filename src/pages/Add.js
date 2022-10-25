import React from 'react'
import { Form, useNavigate } from 'react-router-dom';
import FormInput from '../components/FormInput';
import {PropTypes} from 'prop-types';

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
      <FormInput onSubmit={this.onSubmit} titleState={this.state.title} bodyState={this.state.body} onTitleChange={this.onTitleChange} onBodyChange={this.onBodyChange}></FormInput>
    </div>
  );
  }
}

export default AddPageWrapper;

AddPageWrapper.propTypes={
  onAddNotes: PropTypes.func.isRequired
}

Add.propTypes={
  navigate : PropTypes.func.isRequired,
  onAddNotes : PropTypes.func.isRequired,
}
