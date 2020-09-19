import React, { Component } from 'react'
import axios from 'axios'

export default class CreateUser extends Component {

    state = {
        users: [],
        username: ''
    }

    async componentDidMount() {
        this.getUser();
    }

    getUser = async () => {
        const res = await axios.get('http://localhost/api/users');
        this.setState({ users: res.data });
        console.log(res);
    }

    onChangeUsername = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    onSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost/api/users', {
            username: this.state.username
        });
        this.setState({ username: '' });
        this.getUser();
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="card card-body">
                        <h3>Create new User</h3>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input type="text"
                                    className="form-control"
                                    value={this.state.username}
                                    onChange={this.onChangeUsername} />
                            </div>
                            <button type="submit" className="btn btn-primary">Save</button>
                        </form>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="list-group">
                        {
                            this.state.users.map(user => (
                                <li className="list-group-item list-group-item-action"
                                    key={user._id}>
                                    {user.username}
                                </li>)
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}
