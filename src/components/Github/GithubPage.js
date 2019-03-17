import React, {Component} from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import Profile from './Profile';
import Search from './Search';
import './github.scss';

class GithubPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          username: "Makulka",
          userData: [],
          userRepos: [],
          perPage: 10,
          loading: false
        }
      }
      //Get user data from github
      getUserData() {
        this.setState({
          loading: true
        })
        $.ajax({
          url: "https://api.github.com/users/" + this.state.username + "?client_id=" + this.props.clientId + "&client_secret" + this.props.clientSecret,
          dataType: "json",
          cache: false,
          success: function(data) {        
            this.setState({
              userData: data,
              loading: false
            });
          }.bind(this),
          error: function(xhr, status, err) {
            this.setState({
              username: null,
              loading: false
            });
            alert(err);
          }.bind(this)
        });    
      }
    
      //Get user's repos from github
      getUserRepos() {        
        $.ajax({
          url: "https://api.github.com/users/" + this.state.username + "/repos?per_page"+this.state.perPage+"client_id=" + this.props.clientId + "&client_secret" + this.props.clientSecret+"&sort=created",
          dataType: "json",
          cache: false,
          success: function(data) {        
            this.setState({
              userRepos: data
            });
          }.bind(this),
          error: function(xhr, status, err) {
            this.setState({
              username: null
            });
            alert(err);
          }.bind(this)
        });    
      }
    
      handleFormSubmit(username) {
        this.setState(
          {username: username},
          function() {
            this.getUserData();
            this.getUserRepos();
          }
        )
      }
    
      componentDidMount() {
        this.getUserData();  
        this.getUserRepos();  
      }
      render() {
        const {loading} = this.state
        return (
            <div className="container content github-content">
              <h1>Search Github Users</h1>
              <Search onFormSubmit={this.handleFormSubmit.bind(this)} {...this.state}/>
              {!loading? < Profile {...this.state}/> : <p className="loading">LOADING</p> }                        
          </div>
        );
      }
    }
    
    //properties that dont change
    GithubPage.propTypes = {
        clientId: PropTypes.string,
        clientSecret: PropTypes.string
    };
    GithubPage.defaultProps = {
      clientId: "59f5e2d28598d392d51a",
      clientSecret: "edc2a9149e82e0406e72b31a47424b598235d5a9"
    }



export default GithubPage;