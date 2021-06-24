import './App.css'
import Chat from './Components/Chat'
import SignIn from './Components/SignIn'
import { useAuthState } from 'react-firebase-hooks/auth'
import {auth} from './Services/Firebase'

export default function App() {

  const [user] = useAuthState(auth);

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Im the app</h1>
        {user ? <Chat /> : <SignIn />}
      </header>
    </div>
  )
}
