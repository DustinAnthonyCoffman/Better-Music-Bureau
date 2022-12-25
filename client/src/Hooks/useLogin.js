import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const useLogin = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const { dispatch } = useAuthContext()

  const login = async (email, password) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch('http://localhost:8080/api/auth/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ email, password })
    })
    const json = await response.json()
  
    console.log('we set this to local storage', json.user)
    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem('user', JSON.stringify(json))

      // update the auth context
        //THIS MIGHT BE SOMETHING WE SHOULD CHANGE
    //THIS MIGHT BE SOMETHING WE SHOULD CHANGE
    //THIS MIGHT BE SOMETHING WE SHOULD CHANGE
    //THIS MIGHT BE SOMETHING WE SHOULD CHANGE
    //THIS MIGHT BE SOMETHING WE SHOULD CHANGE
      dispatch({type: 'LOGIN', payload: json.user})

      // update loading state
      setIsLoading(false)
    }
  }

  return { login, isLoading, error }
}