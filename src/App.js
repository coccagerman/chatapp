import './App.css'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import './App.css'
import Chat from './Components/Chat'

import { useAuthState } from 'firebase-react-hooks/auth'
import { useCollectionData } from 'firebase/firestore'

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Im the app</h1>
        <Chat />
      </header>
    </div>
  )
}
