import React from 'react'
import { useParams } from 'react-router-dom'
import { getNote } from '../utils/local-data';
import { showFormattedDate } from '../utils';
import DeleteButton from './DeleteButton'
import EditButton from './EditButton';

export default function DetailedItem({DeleteNote, EditNote}) {
    const {id} = useParams();
    const note = getNote(id);
    return (
        <div className='detail-page'>
            {note!==undefined?
                <div className='note-item' id={id}>
                    <h2 className="detail-page__title">
                            {note.title}
                    </h2>
                    <h4 className="detail-page__createdAt">
                        {showFormattedDate(note.createdAt)}
                    </h4>
                    <p className="detail-page__body">
                        {note.body}
                    </p>
                    <div className='button-container'>
                        <EditButton EditNote={EditNote}></EditButton>
                        <DeleteButton id={id} DeleteNote={DeleteNote}></DeleteButton>
                    </div>
                </div>
                : <div className="notes-list-empty">
                        <p>Kosong</p>
                    </div>}
        </div>
    )
}
