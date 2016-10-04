import React from "react";

class AddNote extends React.Component {
   getRef(ref){
       this.newnote = ref;
   }
   handleSubmit(){
        const newNote = this.newnote.value;
        this.newnote.value = " ";
        this.props.addNote(newNote);
     }

    render(){
        return (
        <div className = "input-group">
            <input type = "text" className = "form-control" ref={ (ref) => this.getRef(ref)} placeholder = "Add new note"/>
            <span className = "input-group-btn">
             <button className = "btn btn-default" type="button" onClick =  {() => this.handleSubmit()}>Submit</button>
            </span>
        </div>
        )
    }
}

export default AddNote;