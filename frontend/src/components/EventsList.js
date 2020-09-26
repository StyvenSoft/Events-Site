import React, { Component } from 'react'
import axios from 'axios'
import { format } from 'timeago.js'

export default class EventsList extends Component {

    state = {
        events: []
    }

    async componentDidMount() {
        const res = await axios.get('http://localhost:4000/api/events')
        console.log(res);
        this.setState({ events: res.data })
    }

    deleteEvent = (id) => {
        console.log(id);
    }

    render() {
        return (
            <div className="row">
                {
                    this.state.events.map(event => (
                        <div className="col-md-4 p-2" key={event._id}>
                            <div className="card text-white bg-dark">
                                <div className="card-header">
                                    <h5>{event.title}</h5>
                                </div>
                                <div className="card-body">
                                    <p>{event.content}</p>
                                    <p>{event.author}</p>
                                    <p>{format(event.date)}</p>
                                </div>
                                <div className="card-footer">
                                    <div className="btn btn-danger"
                                         onclick={() => this.onclick(event.id)}>Delete</div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}
