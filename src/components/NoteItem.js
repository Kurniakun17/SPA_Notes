import React from 'react'
import { showFormattedDate } from '../utils'

export default function NoteItem({id, title, body, createdAt}) {
    createdAt = showFormattedDate(createdAt);
    return (
        <div className='note-item' id={id}>
            <h2 className="note-item__title">
                {title}
            </h2>
            <h4 className="createdAt">
                {createdAt}
            </h4>
            <p className="note-item__body">
                {body}
            </p>
        </div>
    )
}
