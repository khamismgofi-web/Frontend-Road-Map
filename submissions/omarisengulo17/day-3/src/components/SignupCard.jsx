import { useState } from 'react'

function SignupCard({ onLogin }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errors, setErrors] = useState({})

  const handleSubmit = (e) => {
  e.preventDefault()

  const newErrors = {}

  if (!name.trim()) {
    newErrors.name = 'Name is required'
  }

  if (!email.trim()) {
    newErrors.email = 'Email is required'
  }

  if (!password.trim()) {
    newErrors.password = 'Password is required'
  }

  if (!confirmPassword.trim()) {
    newErrors.confirmPassword = 'Please confirm your password'
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (email && !emailPattern.test(email)) {
    newErrors.email = 'Enter a valid email'
  }

  if (password && confirmPassword && password !== confirmPassword) {
    newErrors.confirmPassword = 'Passwords do not match'
  }

  setErrors(newErrors)
}

  return (
    <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
       <h2 className="mb-6 text-center text-2xl font-bold">
  Signup
</h2>

    <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="mb-1 block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-blue-500"
          />
          {errors.name && (
             <p className="text-red-500 text-sm">{errors.name}</p>
)}
        </div>

        <div className="mb-4">
          <label className="mb-1 block text-sm font-medium text-gray-700">Email</label>
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

        <div className="mb-4">
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

        <div className="mb-4">
          <label className="mb-1 block text-sm font-medium text-gray-700">Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-blue-500"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
)}
        </div>

        <button
  type="submit"
  className="w-full rounded-lg bg-blue-600 py-2 font-semibold text-white hover:bg-blue-700"
>
  Signup
</button>
      </form>

       <p className="mt-4 text-center text-sm text-gray-600">
  Already have an account?{' '}
  <button
    type="button"
    onClick={onLogin}
    className="font-semibold text-blue-600 hover:underline"
  >
    Login
  </button>
</p>
    </div>
  )
}

export default SignupCard