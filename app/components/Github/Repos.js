import React from "react"

class Repos extends React.Component{

    render(){

            return(

                <div>
                    Repos for {this.props.username}
                     Repos : {this.props.repos}
                 </div>

            )
    }

}

module.exports = Repos;