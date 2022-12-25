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

  // useEffect(() => {

  //   //WHY ARE WE DISPATCHING HERE? DONT FUCKING SET REVIEWS FROM HERE
  //   const fetchReviews = async () => {
  //     const response = await fetch('http://localhost:8080/api/reviews')
  //     const json = await response.json()    
  //     if(response.ok && user) {
  //       const adminReviews = json.reviews.filter((review: {userID: string}) => review.userID === user.user)
  //       console.log('admin revs', adminReviews)
  //       // dispatch({type: 'SET_REVIEWS', payload: adminReviews})
  //     }
  // }
  //   fetchReviews()
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  const adminReviews = reviews.filter((review: {userID: string}) => review.userID === user.user)
  console.log('AFTER FILTER', adminReviews)
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
            />
        ))}
      </div>
    </>
  )
}


