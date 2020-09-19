import React, { Component } from 'react'
import axios from 'axios'

export default class CreateUser extends Component {

    state = {
        users: [],
        username: ''
    }

    async componentDidMount() {
        const res = await axios.get('http://localhost/api/users');
        console.log(res);
        this.setState({ users: res.data });
    }

    onChangeUsername = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="card card-body">
                        <h3>Create new User</h3>
                        <form >
                            <div className="form-group">
                                <input type="text"
                                       className="form-control"
                                       onChange={this.onChangeUsername} />
                            </div>
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
