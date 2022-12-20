//components
import {Review} from './Review'

//hooks
import {useEffect, useState} from 'react'

//interfaces
import {ReviewI} from '../../Interfaces/interfaces'

//context
import {useAuthContext} from '../../Hooks/useAuthContext'

export const AdminReviews = () => {
  const [reviews, setReviews] = useState<ReviewI[]>([])
  const {user} = useAuthContext()

  useEffect(() => {
    const fetchReviews = async () => {
    const response = await fetch('http://localhost:8080/api/reviews')
    const json = await response.json()
    if(response.ok) {
      const adminReviews = json.reviews.filter((review: {userID: string}) => review.userID === user.user)
      setReviews(adminReviews)
    }
  }
    fetchReviews()
  }, [user])
  return (
    <>
        <div className='reviews'>
          {reviews.length > 0 && reviews.map((review: ReviewI) => (
            <Review key={review._id} title={review.title} review={review.review} artist={review.artist} />
          ) )}
        </div>
    </>
  )
}


