import { useState } from 'react'
import { useDispatch } from "react-redux"
import { registration } from "./AuthSlice"
import { useNavigate } from "react-router-dom";

export default function Registration() {
    const [userData, setUserData] = useState({ username: "", email: "", mobile: "", password: "", })
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const handleRegistration = () => {
        dispatch(registration(userData))
        navigate("/login")
    }
    return (
        <div style={{ padding: "40px" }}>
            <div>
                <input onChange={(e) => { setUserData({ ...userData, username: e.target.value }) }} type="text" placeholder="username" />
            </div>
            <div>
                <input onChange={(e) => { setUserData({ ...userData, mobile: e.target.value }) }} type="number" placeholder="mobile" />
            </div>
            <div>
                <input onChange={(e) => { setUserData({ ...userData, email: e.target.value }) }} type="email" placeholder="email" />
            </div>
            <div>
                <input onChange={(e) => { setUserData({ ...userData, password: e.target.value }) }} type="password" placeholder="password" />
            </div>
            <button onClick={handleRegistration} style={{ cursor: "pointer" }}>Register</button>
        </div>
    )
}
