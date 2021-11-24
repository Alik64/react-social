import React, { Component } from 'react'

export default class ProfileStatus extends Component {

    state = {
        editMode: false
    }
    activatedMode() {
        this.setState({
            editMode: true
        })
    }
    desactivatedMode() {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div>

                {this.state.editMode
                    ? <div><input autoFocus={true} onBlur={() => this.desactivatedMode()} type="text" value={this.props.status} /></div>
                    : <div><span onClick={() => this.activatedMode()}>{this.props.status}</span></div>}

            </div>
        )
    }
}
