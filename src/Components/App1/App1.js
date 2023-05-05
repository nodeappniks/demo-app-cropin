import React from 'react'
import { useSelector } from "react-redux"
import { selectActiveUser } from "../Auth/AuthSlice"
export default function App1() {
    const user = useSelector(selectActiveUser)
    return (
        <div>
            App1
            <div>
                {user.username}
            </div>
        </div>
    )
}
