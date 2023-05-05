import React from 'react'
import { useNavigate } from "react-router-dom";
export default function Home() {
    const navigate = useNavigate();
    const handleNavigate = (to) => {
        navigate(`/${to}`)
    }
    return (
        <div>
            <div>
                <button onClick={() => handleNavigate("app1")} style={{ cursor: "pointer", height: "200px", width: "200px" }} >App1</button>
            </div>
            <div>
                <button onClick={() => handleNavigate("app2")} style={{ cursor: "pointer", height: "200px", width: "200px" }} >App2</button>
            </div>


        </div>
    )
}
