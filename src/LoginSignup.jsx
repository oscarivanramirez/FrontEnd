import React, { useEffect, useState } from "react";
import axios from 'axios'
import './LoginSignup.css'

export default function LoginSignup(){

    const [users, setUsers] = useState(undefined);

    const [error, setError] = useState('');

    const [newUser, setNewUser] = useState('');

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
    }, [])
    //`https://demo-repo23.herokuapp.com/rooms/create/${newRoomName}`
    const handleCreateUser = () =>{
        axios.post(`https://swejol.herokuapp.com/users/create/${newUser}`)
            .then((res) => {
                console.log(res);
            })
            .catch((err) =>{
                console.log(err)
                setError(err.toString())
            })
    }



    return(
        <div>
            {error}
            {users && 
                <div>  
                    {users['dsadasdsa'].userName}
                </div>

            }
            <div>
                <h1>
                    Login
                </h1>
                <h4>
                    Username  
                </h4>
                <input type="text"/>
                <h4>
                    Password
                </h4>
                <input type="text"/>
                <button>
                    Login
                </button>
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