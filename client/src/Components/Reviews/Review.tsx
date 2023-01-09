
//dependencies
import {useState} from 'react'

//components
import {Col, Button, Row, Image} from 'react-bootstrap'

//auth
import {useAuthContext} from '../../Hooks/useAuthContext'

//modal
import { DeleteReviewModal } from '../../Modals/DeleteReviewModal'
import { EditReviewModal } from '../../Modals/EditReviewModal'
import { ReviewDetailsModal } from '../../Modals/ReviewDetailsModal'

//interfaces
import {ReviewI} from '../../Interfaces/interfaces'



export const Review = (props: ReviewI) => {
  const {user} = useAuthContext()
  const {title, review, artist, _id, userID, reviewImage, author, authorBand, banner} = props
  const [deleteModal, setDeleteModal] = useState<boolean>(false)
  const [editModal, setEditModal] = useState<boolean>(false)
  const [reviewDetailsModal, setReviewDetailsModal] = useState(false)
  return (
    <Col className='d-flex flex text-center justify-content-center my-3'>
      {reviewDetailsModal ? 
        <ReviewDetailsModal 
          _id={_id}
          title={title} 
          review={review} 
          artist={artist} 
          reviewImage={reviewImage}
          author={author} 
          authorBand={authorBand}
          banner={banner} 
          setEditModal={setEditModal} 
          setDeleteModal={setDeleteModal}
          setReviewDetailsModal={setReviewDetailsModal} 
          /> : null }
      {editModal ? <EditReviewModal _id={_id} title={title} review={review} artist={artist} setEditModal={setEditModal} /> : null }
      {deleteModal ? <DeleteReviewModal _id={_id} title={title} setDeleteModal={setDeleteModal} /> : null }
      {!editModal && !deleteModal ? 
        <div className="">
            <Image 
              src={`data:${reviewImage.contentType};base64,${reviewImage.imageBase64}`} 
              alt='Review Image' 
              className='review-image' 
              onClick={() => setReviewDetailsModal(true)} 
              />
          <Row>
            <Col className='my-2 artist'>{title}</Col>
          </Row>
          <Row>
            <Col className='my-2 artist'>Genre: </Col>
          </Row>
          <Row>
            <Col className='my-2 artist'>By: {author} of {authorBand}</Col>
          </Row>
          {user && user === userID ? 
            <Row className='row row-cols-sm-2 row-cols-md-2 row-cols-lg-2 row-cols-xl-2 align-center'>
              <Col className='d-flex justify-content-end'>
                <Button className='btn btn-dark mx-2 my-2 admin-button' onClick={() => setEditModal(true)}>Edit  </Button>
              </Col>
              <Col className='d-flex justify-content-start'>
                <Button className='btn btn-dark mx-2 my-2 admin-button' onClick={() => setDeleteModal(true)}>Delete</Button>
              </Col>
          </Row> : null}
        </div>
            : null }
    </Col>
  )
}

