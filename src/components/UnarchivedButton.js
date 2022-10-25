import React from 'react'
import {PropTypes} from 'prop-types'

export default function UnarchivedButton({id, UnarchivedNote}) {
    return (
        <div>
            <input className='button' type='submit' value='Unarchived' onClick={()=>UnarchivedNote(id)}></input>
        </div>
    )
}

UnarchivedButton.propTypes={
    id: PropTypes.string.isRequired,
    UnarchivedNote: PropTypes.func.isRequired
}