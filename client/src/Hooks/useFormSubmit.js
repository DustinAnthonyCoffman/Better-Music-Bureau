import {useState} from 'react'
import { useReviewsContext } from './useReviewsContext'
import axios from 'axios'


export const useFormSubmit = () => {
    const {dispatch} = useReviewsContext()
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const createReview = async (formData) => {
        setIsLoading(true)
        setError(null)
        try {
            const response = await axios.post('http://localhost:8080/api/admin/', formData)
                .then((res) => {
                    console.log('res.data', res.data)
                    setIsLoading(false)
                    dispatch({type: 'CREATE_REVIEW', payload: res.data})
                })
                .catch(err => {
                    console.log('err', err)
                    setIsLoading(false)
                    setError(err)
                })
        }
        catch (err) {
            console.log('err', err)
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