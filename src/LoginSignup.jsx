import React, { useEffect, useState } from "react";
import axios from 'axios'
import './LoginSignup.css'

export default function LoginSignup(){

    const [users, setUsers] = useState(undefined);

    const [error, setError] = useState('');

    /*New User*/

    const [newUser, setNewUser] = useState('');

    const [newPW, setNewPW] = useState('');

    /*SuccessSignUp*/
    
    const [signupSuccess, setSignupSuccess] = useState('')

    /*Login Prev User*/

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
        axios.post(`users/create/${newUser}/${newPW}`)
            .then((res) => {
                console.log(res);
                setRefresh(refresh + 1);
                setNewUser('');
                setNewPW('');
                setSignupSuccess('congrats '+ newUser + ' On Signing Up');
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
            {error || signupSuccess}
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
                <input
                    value={newPW}
                    onChange={(event) => setNewPW(event.target.value)}
                    placeholder={'Enter a Unique PassWord'}
                />
                <button onClick={handleCreateUser}>Sign Up</button>
            </div>
            
        </div>
    )
}