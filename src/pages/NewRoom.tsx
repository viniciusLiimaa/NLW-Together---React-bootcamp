import { Link, useHistory } from 'react-router-dom'
import { FormEvent, useState } from 'react'
import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import '../styles/auth.scss';
import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';
import { database } from '../services/firebase';


export function NewRoom() {
  const { user } = useAuth();
  const history = useHistory();

  const [newRoom, setNewRoom] = useState('')


  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();

    if (newRoom.trim() === '') {
      return;
    };

    const roomRef = database.ref('rooms');

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id
    })
    
    history.push(`/rooms/${firebaseRoom.key}`)

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
          <h2>Create a new room</h2>
          <form onSubmit={handleCreateRoom}>
            <input 
              type="text"
              placeholder="Room's name"
              onChange={event => setNewRoom(event.target.value)}
              value={newRoom}
            />
            <Button type="submit">Create room</Button>
          </form>
          <p>
            Wish to join an existing room?
            <Link to="/">Click here</Link>
          </p>
        </div>
      </main>
    </div>

  )


}

