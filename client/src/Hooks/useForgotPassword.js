import { useState } from 'react'

export const useForgotPassword = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const resetPassword = async (email) => {
        setIsLoading(true)
        setError(null)
        const response = await fetch('http://localhost:8080/api/auth/forgotPassword', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ email })
        })
            const json = await response.json()
            console.log('json response', json)

            if (!response.ok) {
                setIsLoading(false)
                setError(json.error)
            }
            if (response.ok) {
                console.log('response was ok!')
            // update loading state
                setIsLoading(false)
            }
        }
    return { resetPassword }
}