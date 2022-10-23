import React from 'react'


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
    let title = this.state.title;
    let body = this.state.body;
    this.props.onAddNotes(this.state);
  }

  render(){
    return (
    <div className='Add'>
      <div className='add-new-page-body'>
        <div className='add-new-page__input'>
            <form onSubmit={this.onSubmit}>
                <input className='add-new-page__input__title' placeholder="Masukkan Title" value={this.state.title} onChange={this.onTitleChange}></input>
                <textarea className='add-new-page__input__body' placeholder='Masukkan Body' value={this.state.body} onChange={this.onBodyChange}></textarea>
                <input type="submit" className='add-new-page-submit'/>
            </form>
        </div>
      </div>
    </div>
  );
  }
}

export default Add;
