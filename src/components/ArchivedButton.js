import React from 'react'
import {PropTypes} from 'prop-types'

export default function ArchivedButton({id, ArchivedNote}) {
    return (
        <div>
            <input className='button' type='submit' value='Archived' onClick={()=>{ArchivedNote(id)}}></input>
        </div>
    )
}

ArchivedButton.propTypes={
    id: PropTypes.string.isRequired,
    ArchivedNote: PropTypes.func.isRequired
}