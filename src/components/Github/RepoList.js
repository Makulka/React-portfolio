import React from 'react';
import Repo from './Repo'

//the array containing all the repos -> props = the array
const RepoList = (props) => {    
    return(
        <div>
            <ul className="list-group">
                {
                    props.userRepos.map((repo) => {
                        return < Repo 
                            repo = {repo}
                            key = {repo.id}
                            // {...props} 
                        />
                    })
                }  
                        
            </ul>
        </div>
    );
}

export default RepoList;