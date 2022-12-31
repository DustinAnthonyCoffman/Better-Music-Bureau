
//dependencies
import {useState} from 'react'

//components
import {Col, Button, Row, Card, Image} from 'react-bootstrap'

//auth
import {useAuthContext} from '../../Hooks/useAuthContext'

//modal
import { DeleteReviewModal } from '../../Modals/DeleteReviewModal'
import { EditReviewModal } from '../../Modals/EditReviewModal'

//interfaces
import {ReviewI} from '../../Interfaces/interfaces'

export const Review = (props: ReviewI) => {
  console.log('props', props)
  const {user} = useAuthContext()
  const {title, review, artist, _id, userID, reviewImage, author, authorBand} = props
  const [deleteModal, setDeleteModal] = useState<boolean>(false)
  const [editModal, setEditModal] = useState<boolean>(false)

  return (
    <Col className='px-1 py-1 my-1 mx-1'>
      {editModal ? <EditReviewModal _id={_id} title={title} review={review} artist={artist} setEditModal={setEditModal} /> : null }
      {deleteModal ? <DeleteReviewModal _id={_id} title={title} setDeleteModal={setDeleteModal} /> : null }
      {!editModal && !deleteModal ? 
        <Card>
          <Card.Header>{title}</Card.Header>
          <Card.Body className='px-1 py-1 my-1 mx-1'>
            <Row className='align-items-center'>
              <Col>{review}</Col>
            </Row>
            <Row className='align-items-center'>
              <Col>
                <Image src={`data:${reviewImage.contentType};base64,${reviewImage.imageBase64}`} alt='Review Image' className='fluid rounded' />
              </Col>
            </Row>
            <Row>
              <Col className='my-4 artist'>By: {author} of {authorBand}</Col>
            </Row>
          </Card.Body>
            {user && user === userID ? 
              <Row>
                <Col xs={12}>
                  <Button className='col btn btn-dark mx-4 my-4' onClick={() => setEditModal(true)}>Edit Review</Button>
                  <Button className='col btn btn-dark mx-4 my-4' onClick={() => setDeleteModal(true)}>Delete Review</Button>
                </Col>
            </Row> : null}
        </Card>
            : null }
    </Col>
  )
}

