import React from "react";
import UserProfile from "./Github/UserProfile";
import Repos from "./Github/Repos";
import Notes from "./Notes/Notes";
import ReactFireBase from "reactfire"
import  FireBase from "firebase";
import Mixins from 'es6-mixins';

class Profile extends React.Component {



    constructor(){
        super();
        this.state = {

                bio : { name : "Jake"} , 
                notes :[1,2,3],
                repos :['a','b','c']

        }

        Mixins([ReactFireBase],this);
        this.handleAddNewNote = this.handleAddNewNote.bind(this);
    }
   
    componentDidMount(){

        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyBPRob6AU4QE2edooxD0JQTb3Pe_sEX_Mg",
            authDomain: "notetakerapp-ce9a9.firebaseapp.com",
            databaseURL: "https://notetakerapp-ce9a9.firebaseio.com",
            storageBucket: "notetakerapp-ce9a9.appspot.com",
            messagingSenderId: "516205289204"
        };
        FireBase.initializeApp(config);
       // console.log(this.props.params.username);
        this.ref = FireBase.database().ref(this.props.params.username);//this.ref.child(this.props.params.username);
       // console.log(childRef.toString());
        this.bindAsArray(this.ref , "notes" , function(error){
                console.log(error);
        });

    }
   

   componentWillUnmount(){

       this.unbind("notes");
   }
   
   handleAddNewNote(newNote){
        this.ref.child(this.state.notes.length).set(newNote);
   }
   

    render(){
        
        return (

            <div className  = "container" >
                
                <div className = "col-md-4">
                     <UserProfile  username = {this.props.params.username} bio = {this.state.bio} />
                </div>
                <div className = "col-md-4">
                     <Repos username = {this.props.params.username} repos = {this.state.repos} />
                </div>
                <div className = "col-md-4">
                     <Notes username = {this.props.params.username} notes = {this.state.notes} addNote = {this.handleAddNewNote} />
                </div>


            </div>
        )
    }
}


module.exports = Profile;