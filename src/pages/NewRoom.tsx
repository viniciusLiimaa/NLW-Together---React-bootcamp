import { Link } from 'react-router-dom'
import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import '../styles/auth.scss';
import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';


export function NewRoom() {

  // const { user } = useAuth();

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
          <form>
            <input 
              type="text"
              placeholder="Room's name"
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

