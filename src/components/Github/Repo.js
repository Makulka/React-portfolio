import React from 'react';

//individual repos -> props = repo
const Repo = (props) => {
    const repo = props.repo;
    return(
        <div>
            <li className="list-group-item">
                <a href={repo.html_url}>{repo.name}</a>
                : {repo.description}
            </li>
        </div>
    );
}

export default Repo;