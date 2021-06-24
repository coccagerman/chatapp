import { auth } from '../Services/Firebase'

export default function ChatMessage ({message}) {

    const { text, uid, photoURL } = message
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received'

    return (
        <div className={`message ${messageClass}`}>
            <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} alt='User' />
            <p>{text}</p>
      </div>
    )
}