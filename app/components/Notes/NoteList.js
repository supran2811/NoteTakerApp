import React from 'react';

class NoteList extends React.Component{

    render(){
          var notes = this.props.notes.map(function(note , index){
                return <li className = "list-group-item" key = {index} > {note['.value']}  </li>
            });

        

        return(
            <div className = "list-group">{notes}</div>
        )
    }
}

module.exports = NoteList;