
//dependencies
import {useState} from 'react'

//components
import {Col, Button, Row, Card} from 'react-bootstrap'

//auth
import {useAuthContext} from '../../Hooks/useAuthContext'

//modal
import { DeleteReviewModal } from '../../Modals/DeleteReviewModal'
import { EditReviewModal } from '../../Modals/EditReviewModal'

//interfaces
import {ReviewI} from '../../Interfaces/interfaces'

export const Review = (props: ReviewI) => {
  const {user} = useAuthContext()
  const {title, review, artist, _id, userID} = props
  const [deleteModal, setDeleteModal] = useState<boolean>(false)
  const [editModal, setEditModal] = useState<boolean>(false)
console.log('its this', user)
console.log('its this', userID)

  return (
    <>
      {editModal ? <EditReviewModal _id={_id} title={title} review={review} artist={artist} setEditModal={setEditModal} /> : null }
      {deleteModal ? <DeleteReviewModal _id={_id} title={title} setDeleteModal={setDeleteModal} /> : null }
      {!editModal && !deleteModal ? 
        <Card>
          <Card.Header>{title}</Card.Header>
          <Card.Body>
          <Row>
            <Col xs={12}>{review}</Col>
          </Row>
          <Row>
            <Col xs={12}>{artist}</Col>
          </Row>
          </Card.Body>
            <p>whats this look like  ||||||| {user.user} also whats {userID}</p>
            {user && user.user === userID ? 
              <Row>
                <Col xs={1}>
                  <Button onClick={() => setEditModal(true)}>Edit Review</Button>
                </Col>
                <Col xs={1}>
                  <Button onClick={() => setDeleteModal(true)}>Delete Review</Button>
                </Col>
            </Row> : null}
        </Card>
            : null }
    </>
  )
}
