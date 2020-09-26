import React, { Component } from 'react'
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

export default class CreateEvent extends Component {

    state = {
        users: [],
        userSelected: '',
        title: '',
        content: '',
        date: new Date(),
        editing: false,
        _id: '' 
    }

    async componentDidMount() {
        const res = await axios.get('http://localhost:4000/api/users');
        const propId = this.props.match.params.id;

        this.setState({ users: res.data.map(user => user.username),
                        userSelected: res.data[0].username 
        });
        if(propId) {
            const res = await axios.get('http://localhost:4000/api/events/' + propId);
            this.setState({
                title: res.data.title,
                content: res.data.content,
                date: new Date(res.data.date),
                userSelected: res.data.author,
                editing: true,
                _id: propId
            })
        }
    }

    onSubmit = async (e) => {
        e.preventDefault();
        
        const newEvent = {
            title: this.state.title,
            content: this.state.content,
            date: this.state.date,
            author: this.state.userSelected 
        }
        if(this.state.editing) {
            await axios.put('http://localhost:4000/api/events/' + this.state._id, newEvent); 
        } else {
            await axios.post('http://localhost:4000/api/events', newEvent);
        }
    
        this.props.history.push('/');
    }

    onInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onChangeDate = date => {
        this.setState({date});
    }

    render() {
        return (
            <div className="col-md-6 offset-md-3">
                <div className="card card-body bg-dark text-white">
                    <h4>Create a Event</h4>
                    <div className="form-group">
                        <select name="userSelected"
                            className="form-control"
                            onChange={this.onInputChange}
                            value={this.state.userSelected}
                        >
                            {
                                this.state.users.map(user =>
                                    <option key={user} value={user}>
                                        {user}
                                    </option>)
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <input type="text"
                            className="form-control"
                            placeholder="Title"
                            name="title"
                            onChange={this.onInputChange}
                            value={this.state.title}
                            required />
                    </div>
                    <div className="form-group">
                        <textarea name="content"
                            className="form-control"
                            cols="30"
                            rows="10"
                            placeholder="Content"
                            onChange={this.onInputChange}
                            value={this.state.content}
                            required
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <DatePicker className="form-control"
                            selected={this.state.date}
                            onChange={this.onChangeDate} />
                    </div>

                    <form onSubmit={this.onSubmit}>
                        <button type="submit" className="btn btn-primary">Save</button>
                    </form>
                </div>
            </div>
        )
    }
}
