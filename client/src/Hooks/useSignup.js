import {useState} from 'react'
import {useAuthContext} from './useAuthContext'

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch} = useAuthContext()

    const signup = async (email, password) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('/api/user/signup', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password}),
            credentials: 'include' //necessary for the jwt to be passed to browser!

        })
        const json = await response.json()
        console.log('json web token', json)
        if(!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }
        if(response.ok) {
            //save user to local storage
            localStorage.setItem('user', JSON.stringify(json))
            //update auth context
            dispatch({type: 'LOGIN', payload: json})
            setIsLoading(false)
    }
}
    return {signup, isLoading, error}
}