import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';

const config = {
    apiKey: "AIzaSyDjL2q1MYvhi7vDP8AApiK1Hwh2mYrtcH8",
    authDomain: "hello-51e04.firebaseapp.com",
    projectId: "hello-51e04",
    storageBucket: "hello-51e04.appspot.com",
    messagingSenderId: "666378414603",
    appId: "1:666378414603:web:23ec9a682c882f3d3b750e"
}

const app = initializeApp(config)
const auth = getAuth(app)

export async function loginUser(username: string, password: string) {
    const email = `${username}@codedamn.com`
    try {
        const res = await signInWithEmailAndPassword(auth, email, password)
        console.log(res)
        return true
    } catch (error) {
        console.error("Login failed:", error)
        return false
    }
}

export async function registerUser(username: string, password: string) {
    const email = `${username}@codedamn.com`
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        console.log(res)
        return true
    } catch (error) {
        console.error("Registration failed:", error)
        return false
    }
}

export async function logoutUser() {
    const auth = getAuth()
    try {
        await signOut(auth)
        return true
    } catch (error) {
        console.error("Error logging out:", error)
        return false
    }
}