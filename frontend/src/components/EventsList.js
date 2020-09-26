import React, { Component } from 'react'
import axios from 'axios'
import { format } from 'timeago.js'
import { Link } from 'react-router-dom'

export default class EventsList extends Component {

    state = {
        events: []
    }

    componentDidMount() {
        this.getEvents();
    }

    async getEvents() {
        const res = await axios.get('http://localhost:4000/api/events')
        this.setState({ events: res.data })
    }

    deleteEvent = async (id) => {
        await axios.delete('http://localhost:4000/api/events/' + id)
        this.getEvents();
    }

    render() {
        return (
            <div className="row">
                {
                    this.state.events.map(event => (
                        <div className="col-md-4 p-2" key={event._id}>
                            <div className="card text-white bg-dark">
                                <div className="card-header d-flex justify-content-between">
                                    <h5>{event.title}</h5>
                                    <Link className="btn btn-secondary"
                                        to={'/edit/' + event._id} >Edit</Link>
                                </div>
                                <div className="card-body">
                                    <p>{event.content}</p>
                                    <p><strong>{event.author}</strong></p>
                                    <p>{format(event.date)}</p>
                                </div>
                                <div className="card-footer">
                                    <div className="btn btn-danger"
                                         onClick={() => this.deleteEvent(event._id)}>Delete</div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}
