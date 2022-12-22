//this is a hook to use reviewsContext

import {ReviewsContext} from '../Context/ReviewsContext'
import {useContext} from 'react'

export const useReviewsContext = () => {
    const context = useContext(ReviewsContext)

    if(!context) {
        throw Error('useReviewContext must be used inside a ReviewContextProvider')
    }
    return context
}