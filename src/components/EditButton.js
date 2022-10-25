import React from 'react'
import { Link } from 'react-router-dom';

export default function EditButton({id}) {
    return (
        <div>
            <Link to={`/edit/${id}`}>
                <input className='button' type='submit' value={'Edit'}></input>
            </Link>
        </div>
    )
}
