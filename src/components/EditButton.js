import React from 'react'
import { Link } from 'react-router-dom';
import {PropTypes} from 'prop-types'

export default function EditButton({id}) {
    return (
        <div>
            <Link to={`/edit/${id}`}>
                <input className='button' type='submit' value={'Edit'}></input>
            </Link>
        </div>
    )
}

EditButton.propTypes={
    id: PropTypes.string.isRequired,
}