import { useState } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../firebase"
import { useRouter } from "next/navigation"
import { doc, setDoc } from "firebase/firestore"
import db from '../utils/firestore';

const SignUp = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [displayName, setDisplayName] = useState("") // For user's display name
  const [username, setUsername] = useState("") // For user's username
  const [signUpError, setSignUpError] = useState(null)
  const router = useRouter()

  const handleSignUp = async (e) => {
    e.preventDefault()
    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const user = userCredential.user

      // After user is created, store the additional info (display name and username) in Firestore
      await setDoc(doc(db, "users", user.uid), {
        displayName: displayName,
        username: username,
        email: email,
        avatarUrl: "", // Optional: You can add avatar URL or other fields
        createdAt: new Date(), // Store creation date if needed
      })

      // Redirect to home page after successful sign-up
      router.push("/")
    } catch (error) {
      console.error("Error signing up:", error)
      setSignUpError(error.message)
    }
  }

  return (
    <form
      onSubmit={handleSignUp}
      className="flex flex-col p-8 gap-4 text-black min-w-80"
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="p-2 rounded-sm"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="p-2 rounded-sm"
      />
      <input
        type="text"
        value={displayName}
        onChange={(e) => setDisplayName(e.target.value)}
        placeholder="Display Name"
        className="p-2 rounded-sm"
      />
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        className="p-2 rounded-sm"
      />
      <button
        type="submit"
        className="p-2 rounded-sm bg-green-500 font-semibold text-lg text-white"
      >
        Sign Up
      </button>
      {signUpError && (
        <p className="text-red-500 text-sm">{signUpError}</p>
      )}
    </form>
  )
}

export default SignUp
