import React from 'react'

export default function FormInput({onSubmit, titleState, bodyState, onTitleChange, onBodyChange}) {
  return (
    <div className='add-new-page-body'>
        <div className='add-new-page__input'>
            <form onSubmit={onSubmit}>
                <input className='add-new-page__input__title' placeholder="Masukkan Title" value={titleState} onChange={onTitleChange}></input>
                <textarea className='add-new-page__input__body' placeholder='Masukkan Body' value={bodyState} onChange={onBodyChange}></textarea>
                <input type="submit" className='button'/>
            </form>
        </div>
    </div>
  )
}
