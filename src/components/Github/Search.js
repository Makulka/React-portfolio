import React, {Component} from 'react';
import './github.scss';

class Search extends Component {
    onSubmit(e) {
        e.preventDefault(); //prevents the form from submitting
        let username = this.refs.username.value.trim();
        if (!username) {
            alert("Please enter a valid user name");
            return;
        }
        this.props.onFormSubmit(username);
        this.refs.username.value="";
    }
    render() {
        return(
            <div className="search">
                <form onSubmit={this.onSubmit.bind(this)}>
                    <label>Enter Username</label>
                    <input type="text" ref="username" className="form-control"/>
                </form>
            </div>
        );
    }
}

export default Search;
