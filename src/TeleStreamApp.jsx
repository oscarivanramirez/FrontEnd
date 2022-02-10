
import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';
import Room from './Room';

export default function App(){

  const [rooms,setRooms] = useState(undefined);
  const [error,setError] = useState('');
  const [showRooms,setShowRooms] = useState(false);

  const [newRoomName,setNewRoomName] = useState('');

  const [refresh,setRefresh] = useState(0);

  useEffect(() => { // used to fetch data
    axios.get('https://demo-repo23.herokuapp.com/rooms/list')
      .then((res) => {
        //console.log(res);
        if (res.data){
          setRooms(res.data);
        }
    })
    .catch((err) => {
      console.log(err);
      setError(err.toString());
    })
  }, [refresh])

  const handleCreateRoom = () => {
    axios.post(`https://demo-repo23.herokuapp.com/rooms/create/${newRoomName}`)
      .then((res) => {
        console.log(res);
        setRefresh(refresh + 1);
      })
      .catch((err) => {
        console.log(err);
        setError(err.toString());
      })
  };

     // [variable,function]
  const [counter,setCounter] = useState(0);
  const [aString, setAString] = useState('');

  let someValue = 'react';

  function incrementCounter() {
    setCounter(counter + 1);
  }
  function addToString(value){
    setAString(aString + value);
  }

  return (
    <div> 

      {error}

      <button onClick={() => setShowRooms(!showRooms)}>
        toggle show rooms
      </button>

      <button onClick = {incrementCounter}>
        Increment Button
      </button>
      <button onClick = {() => addToString(someValue)}>
        Add Text
      </button>
      {counter}
      {aString}

      <div>
        <Room roomName={"Room A"} numUsers={3}/>
        <Room roomName={"Room B"} numUsers={10}/>
      </div>

      <br/>

      <div>
        {rooms && showRooms &&
          <div>
            {rooms[0].roomName}
          </div>
        }
      </div>

      <div style={{display: 'flex', flexDirection: 'column', gap: '5px', padding: '100px'}}>
        {rooms && rooms.map((room,index) => (
          <Room
            key = {`${room}-${index}`}
            roomName = {room.roomName}
            numUsers = {room.num_users}
          />
        ))}
        {newRoomName}
        <input 
          value={newRoomName} 
          onChange={(event) => setNewRoomName(event.target.value)}
          placeholder={'New Room Name'}
        />
        <button onClick = {handleCreateRoom}>
          Create New Room
        </button>

      </div>

    </div>
  )
 //if rooms is defined access room[i].attribute
}