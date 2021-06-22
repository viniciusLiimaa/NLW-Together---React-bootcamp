
import { useHistory } from 'react-router-dom';


import illustrationImg from '../assets/images/illustration.svg';

import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import '../styles/auth.scss';
import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';



export function Home() {

  const history = useHistory();
  const {user, signInWithGoogle } = useAuth();


  async function handleCreateRoom() {
    history.push('/rooms/new')
    if (!user) {
      await signInWithGoogle()
    }
  }

  function signIn() {

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
          <form>
            <input 
              type="text"
              placeholder="Type room's code"
            />
            <Button type="submit">Enter</Button>
          </form>
        </div>
      </main>
    </div>

  )


}

