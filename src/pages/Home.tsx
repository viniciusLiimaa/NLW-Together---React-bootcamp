
import { useHistory } from 'react-router-dom';


import illustrationImg from '../assets/images/illustration.svg';

import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import '../styles/auth.scss';
import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';
import { FormEvent, useState } from 'react';
import { database } from '../services/firebase';



export function Home() {
  const history = useHistory();
  const {user, signInWithGoogle} = useAuth();
  const [roomCode, setRoomCode] = useState('');


  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle()
    }
    history.push('/rooms/new')
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();

    if (roomCode.trim() === '') {
      return;
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      alert('Room does not exist');
      return;
    } 
    history.push(`/rooms/${roomCode}`);
  }



  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Illustration representing questions and answers"/>
        <strong>Create Q&amp;A rooms live</strong>
        <p>Clear up all of your audience's questions in real time</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask site logo" />
          <button onClick={handleCreateRoom} className="create-room">
            <img src={googleIconImg} alt="Google's logo" />
            Create your room with google
          </button>
          <div className="separator">Or enter an already created room</div>
          <form onSubmit={handleJoinRoom}>
            <input 
              type="text"
              placeholder="Type room's code"
              onChange={event => setRoomCode(event.target.value)}
              value={roomCode}
            />
            <Button type="submit">Enter</Button>
          </form>
        </div>
      </main>
    </div>

  )


}

