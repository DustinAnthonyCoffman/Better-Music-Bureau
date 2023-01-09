import {Review} from './Review'
import {useEffect} from 'react'
import {Row} from 'react-bootstrap'
import {ReviewI} from '../../Interfaces/interfaces'
import { useReviewsContext } from '../../Hooks/useReviewsContext'
import './Reviews.css'


export const Reviews = () => {
  const { reviews, dispatch } = useReviewsContext()

  //should getReviews be moved into the useFormSubmit and we call it something else?
  useEffect(() => {
    const fetchReviews = async () => {
      const response = await fetch('http://localhost:8080/api/reviews')
      const json = await response.json()
    
      if (response.ok) {
        dispatch({type: 'SET_REVIEWS', payload: json.reviews})
      }
  }
    fetchReviews()
  }, [dispatch])
  return (
    <>
      <Row className='space-around'>
        {reviews && reviews.map((review: ReviewI) => (
          <Review
            key={review._id} 
            _id={review._id} 
            userID={review.userID} 
            title={review.title} 
            review={review.review} 
            artist={review.artist} 
            author={review.author} 
            authorBand={review.authorBand} 
            banner={review.banner} 
            reviewImage={review.reviewImage} 
          />
        ))}
      </Row>
    </>
  )
}
