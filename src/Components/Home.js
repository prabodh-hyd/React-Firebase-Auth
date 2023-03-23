import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";


function Home() {
    
    const handleLogout = () =>{
        sessionStorage.removeItem('Auth_Token');
        navigate('/login')
    }
    let navigate = useNavigate();
    useEffect( () =>{
        let authToken = sessionStorage.getItem('Auth_Token')
        console.log(authToken);
        if(authToken){
            navigate('/home')
        }
        if(!authToken){
            navigate('/login')
        }
    }, [])
    return(
        <div>
            Home Page
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Home;