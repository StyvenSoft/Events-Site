import React, { Component } from 'react'

export default class CreateEvent extends Component {

    onSubmit = e => {
        e.preventDefault();
    }

    render() {
        return (
            <div className="col-md-6 offset-md-3">
                <div className="card card-body">
                    <h4>Create a Event</h4>
                    <form onSubmit={this.onSubmit}>
                        <button type="submit" className="btn btn-primary">Save</button>
                    </form>
                </div>
            </div>
        )
    }
}
