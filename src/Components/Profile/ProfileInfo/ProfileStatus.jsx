import React, { Component } from 'react'

export default class ProfileStatus extends Component {
    statusInputRef = React.createRef()
    state = {
        editMode: false
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
    }

    render() {
        return (
            <div>

                {this.state.editMode
                    ? <div><input ref={this.statusInputRef} autoFocus={true} onBlur={this.desactivatedMode} type="text" value={this.props.status} /></div>
                    : <div><span onClick={this.activatedMode}>{this.props.status}</span></div>}

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
