import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuthStore from '../store/useAuthStore'

const SendOtp = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [message, setMessage] = useState('')

  const navigate = useNavigate()
  const { login, initializeAuth } = useAuthStore()

  useEffect(() => {
    initializeAuth()

    const saved = localStorage.getItem('rememberedCredentials')
    if (saved) {
      try {
        const details = JSON.parse(saved)
        setEmail(details.email || '')
        setPassword(details.password || '')
        setRememberMe(true)
      } catch (error) {
        console.error(error)
      }
    }
  }, [])

  const loginHandler = (e) => {
    e.preventDefault()
    setMessage('')

    if (!name || !email || !password) {
      setMessage('Please provide name, email, and password.')
      return
    }

    const token = btoa(`${email}:${Date.now()}`)
    const rememberData = rememberMe
      ? {
          email,
          password,
        }
      : null

    login(name, token, rememberData)

    if (rememberMe) {
      setMessage('Login saved. Welcome back!')
    } else {
      setMessage('Signed in securely.')
    }

    setTimeout(() => {
      navigate('/')
    }, 800)
  }

  return (
    <section className="loginSection">
      <div className="loginCard">
        <div className="loginHeader">
          <h2>Secure Sign In</h2>
          <p>
            Sign in with your Gmail and password. If you choose Remember Me, your
            login will stay saved in the browser.
          </p>
        </div>

        <form onSubmit={loginHandler} className="loginForm">
          <div className="formField">
            <label htmlFor="name">Full name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="formField">
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              type="email"
              placeholder="you@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="formField">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Choose a secure password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="rememberRow">
            <label>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              Remember my email and password
            </label>
          </div>

          {message && <div className="loginMessage">{message}</div>}

          <button className="primaryButton" type="submit">
            Login securely
          </button>
        </form>
      </div>
    </section>
  )
}

export default SendOtp