import React from 'react'
import { useSelector } from "react-redux"
import { selectActiveUser } from "../Auth/AuthSlice"
export default function App2() {
    const user = useSelector(selectActiveUser)
    return (
        <div>
            App2
            <div>
                {user.username}
            </div>
        </div>
    )
}
