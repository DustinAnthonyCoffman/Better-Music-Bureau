import {useState} from 'react'
import {useAuthContext} from './useAuthContext'


export const useFormSubmit = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const {user} = useAuthContext()
    const userID = user.user

    const createReview = async (title, review, artist) => {
        setIsLoading(true)
        setError(null)
        const response = await fetch('http://localhost:8080/api/admin/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({title, review, artist, userID })
        })
        const jsonResponse = await response.json()
        if(!response.ok) {
            console.log('YOUR ERROR', jsonResponse.error)
            setIsLoading(false)
            setError(jsonResponse.error)
        }
        if(response.ok) {
            setIsLoading(false)
    }
}
    const deleteReview = async (id) => {
        console.log('did we make it to the hook useFormSubmit??', id)
        setIsLoading(true)
        setError(null)
        const response = await fetch(`http://localhost:8080/api/admin/${id}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({id})
        })
        const jsonResponse = await response.json()
        if(!response.ok) {
            console.log('YOUR ERROR', jsonResponse.error)
            setIsLoading(false)
            setError(jsonResponse.error)
        }
        if(response.ok) {
            setIsLoading(false)
    }
}
    return {createReview, deleteReview, isLoading, error}
}