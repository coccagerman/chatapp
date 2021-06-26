import firebase from 'firebase/app'
import {auth} from '../Services/Firebase'

export default function SignIn () {
    
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }

    return (
        <section className='signIn'>
            <button className='signIn-btn' onClick={() => signInWithGoogle()}>Sign in with Google</button>
        </section>
    )
}