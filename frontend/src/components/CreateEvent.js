import React, { Component } from 'react'
import axios from 'axios';

export default class CreateEvent extends Component {

    state = {
        users: []
    }

    async componentDidMount() {
        const res = await axios.get('http://localhost:4000/api/users');
        this.setState({ users: res.data.map(user => user.username) });
    }

    onSubmit = e => {
        e.preventDefault();
    }

    render() {
        return (
            <div className="col-md-6 offset-md-3">
                <div className="card card-body">
                    <h4>Create a Event</h4>
                    <div className="form-group">
                        <select name="userSelected"
                            className="form-control"
                        >
                            {
                                this.state.users.map(user =>
                                    <option key={user}>
                                        {user}
                                    </option>)
                            }
                        </select>
                    </div>
                    <form onSubmit={this.onSubmit}>
                        <button type="submit" className="btn btn-primary">Save</button>
                    </form>
                </div>
            </div>
        )
    }
}
