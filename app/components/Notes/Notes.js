import React from "react";
import NoteList from "./NoteList";
import AddNote from "./AddNote";
class Notes extends React.Component{

    render(){
            
          
            return(
                    <div>
                        Notes for {this.props.username}
                        <AddNote addNote = {this.props.addNote} />
                        <NoteList notes = {this.props.notes} />
                    </div>

            )
    }

}

export default Notes;