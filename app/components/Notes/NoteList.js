import React from 'react';

const NoteList = ({notes}) => {
    
        return(
            <div className = "list-group">
                {notes.map( (note , index) => (<li className = "list-group-item" key = {index} > {note['.value']}  </li>))}
            </div>
        )
}

export default NoteList;