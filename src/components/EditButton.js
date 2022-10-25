import React from 'react'

export default function EditButton({id}) {
    function onEditClick(){

    }

    return (
        <div>
            <input className='button' type='submit' value={'Edit'} onClick={onEditClick}></input>
        </div>
    )
}
