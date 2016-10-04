import React from "react"

class Repos extends React.Component{

    render(){
            
            const {repos} = this.props;

            return(

                <div>
                     <h3>User Repo</h3>
                     <div className = "list-group">
                        {repos.map((repo , index) => (
                            <li className = "list-group-item"> 
                            {repo.html_url && <h4><a href = {repo.html_url} key = {index}>{repo.name}</a></h4>} 
                            {repo.description && <p>{repo.description}</p>}
                                </li>
                            )
                        )}
                     </div>
                 </div>

            )
    }

}

module.exports = Repos;