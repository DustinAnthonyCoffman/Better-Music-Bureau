import {useState} from 'react'
import { useReviewsContext } from './useReviewsContext'


export const useFormSubmit = () => {
    const {dispatch} = useReviewsContext()
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const createReview = async (title, review, artist, userID) => {
        setIsLoading(true)
        setError(null)
            const response = await fetch('http://localhost:8080/api/admin/', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({title, review, artist, userID })
            })
            const jsonResponse = await response.json()
            if(!response.ok) {
                setIsLoading(false)
                setError(jsonResponse.error)
            }
            if(response.ok) {
                setIsLoading(false)
                dispatch({type: 'CREATE_REVIEW', payload: jsonResponse})
        }
}
    const deleteReview = async (id) => {
        setIsLoading(true)
        setError(null)
        const response = await fetch(`http://localhost:8080/api/admin/${id}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({id})
        })
        const jsonResponse = await response.json()
        if(!response.ok) {
            setIsLoading(false)
            setError(jsonResponse.error)
        }
        if(response.ok) {
            setIsLoading(false)
            dispatch({type: 'DELETE_REVIEW', payload: jsonResponse})
            return jsonResponse
    }
}
    const editReview = async (review) => {
        setIsLoading(true)
        setError(null)
        const response = await fetch(`http://localhost:8080/api/admin/${review.id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({review})
        })
        const jsonResponse = await response.json()
        if(!response.ok) {
            setIsLoading(false)
            setError(jsonResponse.error)
        }
        if(response.ok) {
            setIsLoading(false)
            dispatch({type: 'EDIT_REVIEW', payload: jsonResponse})
            return jsonResponse
        }
    }
    return {createReview, deleteReview, editReview, isLoading, error}
}