// import React, { useState } from 'react'

// const ProfileStatusWithHooks = (props) => {

//     const [editMode, setEditMode] = useState(false)
//     return (
//         <div>

//             {
//                 <div><span >{props.status || "Enter your status"} </span></div>
//             }
//             {false &&
//                 <div><input autoFocus={true} type="text" /></div>
//             }


//         </div>
//     )

// }

// export default ProfileStatusWithHooks

// Functional coponent

import React, { useState } from 'react'

export default function ProfileStatusWithHooks(props) {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState("")

    const activatedMode = () => {
        setEditMode(true)
    }
    const desactivatedMode = (e) => {
        setEditMode(false)
        props.updateUserStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {editMode
                ? <div><input autoFocus={true} onChange={onStatusChange} onBlur={desactivatedMode} type="text" value={status} /></div>
                : <div><span onClick={activatedMode}>{props.status}</span></div>}

        </div>
    )
}