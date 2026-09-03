import { useState } from 'react'
import LoginCard from './components/LoginCard'
import SignupCard from './components/SignupCard'

function App() {
  const [showSignup, setShowSignup] = useState(false)

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
      {showSignup ? <SignupCard onLogin={() => setShowSignup(false)} />: <LoginCard onSignup={() => setShowSignup(true)} />}
    </main>
  )
}

export default App