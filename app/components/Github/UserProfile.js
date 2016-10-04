import React from "react"

class UserProfile extends React.Component{

    render(){
            
            return(

                <div>
                    {this.props.bio.avatar_url && <li className = "list-group-item" key = "0"> <img src = {this.props.bio.avatar_url} className = "img-round img-responsive"/> </li>}
                    {this.props.bio.name && <li className = "list-group-item" key = "1">Name : {this.props.bio.name}</li>}
                    {this.props.bio.login && <li className = "list-group-item" key = "2">Login: {this.props.bio.login}</li>}
                 </div>

            )
    }

}



export default UserProfile;