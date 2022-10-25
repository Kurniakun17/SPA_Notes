import React from 'react'
import {PropTypes} from 'prop-types'

export default function FormInput({onSubmit, titleState, bodyState, onTitleChange, onBodyChange}) {
  return (
    <div className='add-new-page-body'>
        <div className='add-new-page__input'>
            <form onSubmit={onSubmit}>
                <input className='add-new-page__input__title' placeholder="Masukkan Title" value={titleState} onChange={onTitleChange} required></input>
                <textarea className='add-new-page__input__body' placeholder='Masukkan Body' value={bodyState} onChange={onBodyChange} required></textarea>
                <input type="submit" className='button'/>
            </form>
        </div>
    </div>
  )
}

FormInput.propTypes={
  onSubmit: PropTypes.func.isRequired,
  titleState: PropTypes.string.isRequired,
  bodyState: PropTypes.string.isRequired,
  onTitleChange: PropTypes.func.isRequired,
  onBodyChange: PropTypes.func.isRequired,
}