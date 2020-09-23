import React, { Component } from 'react'
import axios from 'axios'

export default class EventsList extends Component {

    state = {
        events: []
    }

    async componentDidMount() {
        const res = await axios.get('http://localhost:4000/api/events')
        console.log(res);
        this.setState({events: res.data})
    }

    render() {
        return (
            <div className="row">
                {
                    this.state.events.map(event => (
                        <div className="col-md-4 p-2" key={event._id}>
                            <div className="card">
                                <div className="card-body">
                                    <p>{event.content}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}
