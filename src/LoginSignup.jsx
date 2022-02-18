import React, { useEffect, useState } from "react";
import axios from 'axios'
import './LoginSignup.css'

export default function LoginSignup(){

    const [users, setUsers] = useState(undefined);

    const [error, setError] = useState('');

    const [newUser, setNewUser] = useState('');

    const [userLogin, setUserLogin] = useState('');

    const [refresh, setRefresh] = useState(0);

    useEffect(() =>{
        axios.get('users/list')
            .then((res) => {
                if(res.data){
                    setUsers(res.data)
                }
            })
            .catch((err) =>{
                console.log(err);
                setError(err.toString());
            })
    }, [refresh])
    
    const handleCreateUser = () =>{
        axios.post(`users/create/${newUser}`)
            .then((res) => {
                console.log(res);
                setRefresh(refresh + 1);
            })
            .catch((err) =>{
                console.log(err)
                setError(err.toString())
            })
    }

    const handleUserLogin = () =>{
        try{
            if(users[userLogin].userName){
                console.log('Congrats')
                setRefresh(refresh + 1);
            }
        }
        catch(err) {
           console.log(err);
           setError(err.toString())
        }
    }

    return(
        <div>
            {error}
            {/*users && 
                <div>  
                    {users[userLogin].userName}
                </div>
            */
            }
            <div>
                <h1>
                    Login
                </h1>
                <h4>
                    Username  
                </h4>
                <input 
                    value={userLogin} 
                    onChange={(event) => setUserLogin(event.target.value)}
                    placeholder={'Login Using UserName'}/>
                {/*<h4>
                    Password
                </h4>
                <input type="text"/>*/}
                <button onClick={handleUserLogin}>Login</button>
            </div>



            <div>
                <h1>
                    Sign Up
                </h1>
                <h4>
                    Username  
                </h4>
                <input 
                    value={newUser} 
                    onChange={(event) => setNewUser(event.target.value)}
                    placeholder={'Enter a UserName'}/>

                <button onClick={handleCreateUser}>Sign Up</button>

                {/*<h4>
                    Date of Birth  
                </h4>
                <input type="text"/>
                <h4>
                    Password
                </h4>
                <input type="text"/>*/}
            </div>
            
        </div>
    )
}