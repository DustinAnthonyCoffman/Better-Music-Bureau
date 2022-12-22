import {Review} from './Review'
import {useEffect, useState} from 'react'
import {ReviewI} from '../../Interfaces/interfaces'
import { useReviewsContext } from '../../Hooks/useReviewsContext'

export const Reviews = () => {
  // const [reviews, setReviews] = useState<ReviewI[]>([])
  const { reviews, dispatch } = useReviewsContext()
  
  
  useEffect(() => {
    const fetchReviews = async () => {
    const response = await fetch('http://localhost:8080/api/reviews')
    const json = await response.json()
    if(response.ok) {
      // setReviews(json.reviews)
      dispatch({type: 'SET_REVIEWS', payload: json})
      console.log('reviews', json.reviews)
    }
  }
    fetchReviews()
  }, [])
  return (
    <>
        <div className='reviews'>
          {reviews.length > 0 && reviews.map((review: ReviewI) => (
            <Review 
              key={review._id} 
              id={review._id} 
              userID={review.userID} 
              title={review.title} 
              review={review.review} 
              artist={review.artist} 
            />
          ) )}
        </div>
    </>
  )
}
