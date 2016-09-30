import React from "react"

class UserProfile extends React.Component{

    render(){

            return(

                <div>
                    UserName => {this.props.username}
                    Bio =>   {this.props.bio.name}
                 </div>

            )
    }

}



module.exports = UserProfile;