//components
import {Review} from './Review'

//hooks
import {useEffect, useState} from 'react'

//interfaces
import {ReviewI} from '../../Interfaces/interfaces'

//context
import { useReviewsContext } from '../../Hooks/useReviewsContext'

export const AdminReviews = () => {
  const {reviews, dispatch} = useReviewsContext()
  const [adminReviews, setAdminReviews] = useState<ReviewI[]>([])
  
  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    const fetchReviews = async (user: string) => {
      const response = await fetch('http://localhost:8080/api/reviews')
      const json = await response.json()
      const filterdReviews = json.reviews.filter((review: {userID: string}) => review.userID === user) 
      setAdminReviews(filterdReviews)
      if(response.ok) {
        dispatch({type: 'EDIT_REVIEWS', payload: json.reviews})
        return json.reviews
      }
      else {
        console.log('response failed')
      }
    }

    if(storedUser) {
      const user = JSON.parse(storedUser).user
      fetchReviews(user)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [dispatch, reviews])

  return (
    <>
      <div className='reviews'>
        {adminReviews.length > 0 && adminReviews.map((review: ReviewI) => (
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
      </div>
    </>
  )
}


