import { useState } from 'react'

function LoginCard({ onSignup }){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})
  const handleSubmit = (e) => {
  e.preventDefault()

  const newErrors = {}

  if (!email.trim()) {
    newErrors.email = 'Email is required'
  }

  if (!password.trim()) {
    newErrors.password = 'Password is required'
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (email && !emailPattern.test(email)) {
    newErrors.email = 'Enter a valid email'
  }

  setErrors(newErrors)
}
  return (
    <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
      <h2 className="mb-6 text-center text-2xl font-bold">
  Login
</h2>

     <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="mb-1 block text-sm font-medium text-gray-700">
  Email
</label>

         <input
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-blue-500"
/>
           {errors.email && (
             <p className="text-red-500 text-sm">{errors.email}</p>
)}
        </div>

        <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
            <label className="mb-1 block text-sm font-medium text-gray-700">Password</label>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-blue-500"
          />
           {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
)}
        </div>

        <button
  type="submit"
  className="w-full rounded-lg bg-blue-600 py-2 font-semibold text-white hover:bg-blue-700"
>
  Login
</button>
      </form>
     <p className="mt-4 text-center text-sm text-gray-600">
  Don't have an account?{' '}
  <button type="button" onClick={onSignup}>
    Signup
  </button>
</p>
    </div>
  )
}

export default LoginCard