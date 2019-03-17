import React from 'react';
import RepoList from './RepoList';
import './github.scss';

const Profile = (props) => {
    return(
        <div className="card">
          <div className="card-header">
            <h3>{props.userData.name}</h3>
          </div>
          <div className="card-body">
            <div className="row">
                <div className="col-md-4">
                    <img src={props.userData.avatar_url} className="thumbnail" style={{width:"70%"}} alt="profile" />
                </div>
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-md-12">
                            <span className="badge badge-primary">{props.userData.public_repos} Repos</span> 
                            <span className="badge badge-success">{props.userData.public_gists} Public Gists</span> 
                            <span className="badge badge-info">{props.userData.followers} Followers</span> 
                            <span className="badge badge-danger">{props.userData.following} Following</span> 
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="list-group">
                                <li className="list-group-item"><strong>Username: </strong> {props.userData.login}</li>
                                <li className="list-group-item"><strong>Location: </strong> {props.userData.location}</li>
                                <li className="list-group-item"><strong>Email Address: </strong> {props.userData.email}</li>
                            </ul>
                        </div>
                    </div>
                    <br />
                    <a className="btn btn-primary" target="_blank" href={props.userData.html_url}>Visit Profile</a>
                </div>
            </div>
            < hr />
            <h3>User Repositories</h3>
            < RepoList userRepos = {props.userRepos}/>
          </div>
        </div>
    )
}

export default Profile;