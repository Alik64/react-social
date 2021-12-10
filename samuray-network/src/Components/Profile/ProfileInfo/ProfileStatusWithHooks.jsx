

import React, { useEffect, useState } from 'react'

export default function ProfileStatusWithHooks(props) {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)

    }, [props.status])

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
                : <div><span onClick={activatedMode}>{props.status || "Enter your status"}</span></div>}

        </div>
    )
}
