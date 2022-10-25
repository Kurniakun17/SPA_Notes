import React from 'react'
import { showFormattedDate } from '../utils'
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import DeleteButton from './DeleteButton';
import EditButton from './EditButton';

export default function NoteItem({id, title, body, createdAt, DeleteNote, EditNote, isSearch}) {
    createdAt = showFormattedDate(createdAt);
    return (
        <div className='note-item' id={id}>
            <h2 className="note-item__title">
                <Link to={`/note/${id}`}>
                    {title}
                </Link>
            </h2>
            <h4 className="createdAt">
                {createdAt}
            </h4>
            <p className="note-item__body">
                {body}
            </p>
            {isSearch?"":
            <div className='button-container'>
                <EditButton EditNote={EditNote}/>
                <DeleteButton id={id} DeleteNote={DeleteNote}></DeleteButton>
            </div>
            }
        </div>
    )
}

NoteItem.propTypes ={
    id:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    body:PropTypes.string.isRequired,
    createdAt:PropTypes.string.isRequired,
}