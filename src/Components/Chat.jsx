import firebase from 'firebase/app'
import { auth, database } from '../Services/Firebase'
import { useRef, useState, useEffect } from 'react'
import ChatMessage from './ChatMessage'

export default function Chat () {

    const fixedScroll = useRef()
    const [formValue, setFormValue] = useState('')
    const [previousMessages, setPreviousMessages] = useState([])

    const sendMessage = (e) => {
        e.preventDefault()
    
        const { uid, photoURL } = auth.currentUser

        database.add({
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL
        })
    
        setFormValue('')
        fixedScroll.current.scrollIntoView({behavior: 'smooth'})
    }

    const showPreviousMessages = () => {
    
        database.onSnapshot(snapshot => {
          const messagesData = []
          snapshot.forEach(msg => messagesData.push({ id: msg.id, ...msg.data() }))
          setPreviousMessages(messagesData)
        })
      }
    
    useEffect(() => showPreviousMessages(), [])


    return (
        <>
            <button onClick={() => auth.signOut()}>Sign out</button>
            <main>
                {previousMessages && previousMessages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
                <span ref={fixedScroll}></span>
            </main>

            <form>
                <input value={formValue} onChange={e => setFormValue(e.target.value)} placeholder="Write your message!" />
                <button onClick={(e) => sendMessage(e)} disabled={!formValue}>Send</button>
            </form>
            
            <button onClick={()=>  console.log(previousMessages)}>test</button>
        </>
    )
}
