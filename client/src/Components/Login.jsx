import LoginD from "./LoginD";
import LoginL from "./LoginL";
import { useState } from "react";

import React from 'react'

const Login = () => {
    const [theme, setTheme] = useState(true);

    return (
        <div style={{height: "100vh", width: "100vw"}}>
            <button style={{ backgroundColor: theme ? 'black': 'white', color: !theme ? 'black': 'white', position: "absolute" , zIndex: "100"}} onClick={() => setTheme(!theme)}>Toggle Button</button>
            {theme ? <LoginL /> : <LoginD />}
        </div>
    )
}

export default Login
