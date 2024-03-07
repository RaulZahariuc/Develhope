import { useState } from "react"; 
import { Welcome } from "./Welcome"; 

export function InteractiveWelcome() { 
    const [username, setUsername] = useState("") 
   
    function handleUserName(e) {
        const user = e.target.value
        setUsername(user) 
    }
    return(
        <div>
            <input value={username} onChange={handleUserName} />
            <Welcome name={username}/>
        </div>
    )
}