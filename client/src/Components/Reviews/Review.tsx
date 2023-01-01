
//dependencies
import {useState} from 'react'

//components
import {Col, Button, Row, Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'

//auth
import {useAuthContext} from '../../Hooks/useAuthContext'

//modal
import { DeleteReviewModal } from '../../Modals/DeleteReviewModal'
import { EditReviewModal } from '../../Modals/EditReviewModal'

//interfaces
import {ReviewI} from '../../Interfaces/interfaces'

export const Review = (props: ReviewI) => {
  const {user} = useAuthContext()
  const {title, review, artist, _id, userID, reviewImage, author, authorBand} = props
  const [deleteModal, setDeleteModal] = useState<boolean>(false)
  const [editModal, setEditModal] = useState<boolean>(false)
  return (
    // possibly use col-auto!!!!
    <Col className='px-1 py-1 my-1 mx-1 col-2 d-flex'>
      {editModal ? <EditReviewModal _id={_id} title={title} review={review} artist={artist} setEditModal={setEditModal} /> : null }
      {deleteModal ? <DeleteReviewModal _id={_id} title={title} setDeleteModal={setDeleteModal} /> : null }
      {!editModal && !deleteModal ? 
        <Card className="text-center">
          <Card.Header>{title}</Card.Header>
          <Card.Body className='px-1 py-1 my-1 mx-1 h-100 flex-fill'>
            <Row className='align-items-center'>
              {/* <Col className='reviewContent'>{review}</Col> */}
            </Row>
            <Link to=''>
              <Card.Img variant="top" src={`data:${reviewImage.contentType};base64,${reviewImage.imageBase64}`} alt='Review Image' className='fluid rounded'/>
            </Link>
            <Row>
              <Col className='my-4 artist'>By: {author} of {authorBand}</Col>
            </Row>
          </Card.Body>
            {user && user === userID ? 
              <Row className='row row-cols-sm-2 row-cols-md-2 row-cols-lg-2 row-cols-xl-2 align-center'>
                <Col className='d-flex justify-content-end'>
                  <Button className='btn btn-dark mx-2 my-2 admin-button' onClick={() => setEditModal(true)}>Edit  </Button>
                </Col>
                <Col className='d-flex justify-content-start'>
                  <Button className='btn btn-dark mx-2 my-2 admin-button' onClick={() => setDeleteModal(true)}>Delete</Button>
                </Col>
            </Row> : null}
        </Card>
            : null }
    </Col>
  )
}

