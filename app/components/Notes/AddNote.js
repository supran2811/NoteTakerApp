import React from "react";

class AddNote extends React.Component {

    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(){
        console.log(this.refs.newnote.value);

        var newNote = this.refs.newnote.value;
        this.refs.newnote.value = " ";
        this.props.addNote(newNote);

    }

    render(){
        return (
        <div className = "input-group">
            <input type = "text" className = "form-control" ref="newnote" placeholder = "Add new note"/>
            <span className = "input-group-btn">
             <button className = "btn btn-default" type="button" onClick =  {this.handleSubmit}>Submit</button>
            </span>
        </div>
        )
    }
}

module.exports = AddNote;