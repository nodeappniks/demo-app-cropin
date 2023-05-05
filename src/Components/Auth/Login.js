import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { setActiveUser, selectUserDetails } from "./AuthSlice"
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [userLogin, setUserLogin] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const userData = useSelector(selectUserDetails)
    const handleLogin = () => {
        let isLoggedIn = false
        let username = ""
        userData.map((obj) => {
            let condition = (userLogin === obj.username || userLogin === obj.mobile || userLogin === obj.email) && password === obj.password
            if (condition) {
                isLoggedIn = true;
                username = obj.username

            }
        })
        if (isLoggedIn) {
            dispatch(setActiveUser({ username: username }))
            navigate("/home")
        } else {
            alert("Either username or password is incorrect")
        }

    }

    return (
        <div style={{ padding: "40px" }}>
            <div>
                <input onChange={(e) => { setUserLogin(e.target.value) }} type="text" placeholder="username" />
            </div>
            <div>
                <input onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder="password" />
            </div>
            <button onClick={handleLogin} style={{ cursor: "pointer" }} >Login</button>
        </div>
    )
}
