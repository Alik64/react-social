import React, { Component } from 'react'

export default class ProfileStatus extends Component {

    state = {
        editMode: false,
        status: this.props.status
    }
    activatedMode = () => {

        this.setState({
            editMode: true
        })
    }
    desactivatedMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateUserStatus(this.state.status)
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }

    }
    render() {
        return (
            <div>

                {!this.state.editMode
                    ? <div><span onClick={this.activatedMode}>"{this.props.status || "Enter your status"}"</span></div>
                    : <div><input onChange={this.onStatusChange} autoFocus={true} onBlur={this.desactivatedMode} type="text" value={this.state.status} /></div>}

            </div>
        )
    }
}

// Functional coponent

// import React, { useState } from 'react'

// export default function ProfileStatus(props) {
//     const [editMode, setEditMode] = useState(false)

//     const activatedMode = () => {
//         setEditMode(true)
//     }
//     const desactivatedMode = () => {
//         setEditMode(false)
//     }


//     return (
//         <div>
//             {editMode
//                 ? <div><input autoFocus={true} onBlur={() => desactivatedMode()} type="text" value={props.status} /></div>
//                 : <div><span onClick={() => activatedMode()}>{props.status}</span></div>}

//         </div>
//     )
// }
