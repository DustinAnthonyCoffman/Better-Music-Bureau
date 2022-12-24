//components
import {Review} from './Review'

//hooks
import {useEffect} from 'react'

//interfaces
import {ReviewI} from '../../Interfaces/interfaces'

//context
import {useAuthContext} from '../../Hooks/useAuthContext'
import { useReviewsContext } from '../../Hooks/useReviewsContext'

export const AdminReviews = () => {
  const {user} = useAuthContext()
  const {reviews, dispatch} = useReviewsContext()

  useEffect(() => {
    const fetchReviews = async () => {
      const response = await fetch('http://localhost:8080/api/reviews')
      const json = await response.json()    
      if(response.ok) {
        const adminReviews = json.reviews.filter((review: {userID: string}) => review.userID === user.user)
        dispatch({type: 'SET_REVIEWS', payload: adminReviews})
      }
  }
    fetchReviews()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch])
  return (
    <>
      <div className='reviews'>
        {reviews.length > 0 && reviews.map((review: ReviewI) => (
            <Review 
              key={review._id} 
              _id={review._id} 
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


