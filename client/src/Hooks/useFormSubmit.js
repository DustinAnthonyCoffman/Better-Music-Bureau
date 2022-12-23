import {useState} from 'react'
import {useAuthContext} from './useAuthContext'
import { useReviewsContext } from './useReviewsContext'


export const useFormSubmit = () => {
    const {dispatch} = useReviewsContext()

    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const {user} = useAuthContext()

    const createReview = async (title, review, artist) => {
        setIsLoading(true)
        setError(null)
        if(user.user) {
            const userID = user.user
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
        else {
            return
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
    }
}
    return {createReview, deleteReview, isLoading, error}
}


//MOVE GET REVIEWS HERE!!!