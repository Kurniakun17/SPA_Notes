import React from 'react'
import { showFormattedDate } from '../utils'
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import DeleteButton from './DeleteButton';
import EditButton from './EditButton';
import UnarchivedButton from './UnarchivedButton';
import ArchivedButton from './ArchivedButton';

export default function NoteItem({id, title, body, createdAt, archived, DeleteNote, EditNote, ArchivedNote, UnarchivedNote, isSearch}) {
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
                <EditButton id={id} EditNote={EditNote}/>
                <DeleteButton id={id} DeleteNote={DeleteNote}></DeleteButton>
                {archived?<UnarchivedButton id={id}  UnarchivedNote={UnarchivedNote}></UnarchivedButton>:<ArchivedButton id={id} ArchivedNote={ArchivedNote}></ArchivedButton>}
            </div>
            }
        </div>
    )
}

NoteItem.propTypes={
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    archived: PropTypes.bool.isRequired,
    DeleteNote: PropTypes.func,
    EditNote: PropTypes.func,
    isSearch: PropTypes.bool,
    ArchivedNote: PropTypes.func,
    UnarchivedNote: PropTypes.func,
}