
//dependencies
import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

//components
import {Col, Button, Row, Card} from 'react-bootstrap'

//auth
import {useAuthContext} from '../../Hooks/useAuthContext'
import {useFormSubmit} from '../../Hooks/useFormSubmit'

//modal
import { DeleteReviewModal } from '../../Modals/DeleteReviewModal'

//FIX THIS, IT CANNOT BE ANY
//YOU GET THE ERROR  Property 'title' does not exist on type 'IntrinsicAttributes'
export const Review = (props: any) => {
  const {user} = useAuthContext()
  const {title, review, artist, id, userID} = props
  const {deleteReview, error, isLoading} = useFormSubmit()
  const [modal, setModal] = useState<boolean>(false)
  const navigate = useNavigate()

  const handleEdit = (id: string) => {
    //EDIT REVIEW
  }

  const showModal = () => {
    setModal(true)
  }

  const handleDelete = async (id: string) => {
    
    setModal(false)
    await deleteReview(id)

    navigate('/')
  }
  useEffect(() => {
    handleDelete(id)
  },[])
  return (
    <>
    {modal ?
      <DeleteReviewModal id={id} /> : null
    }
      <Card>
        <Card.Header>{title} and my ID is {id}</Card.Header>
        <Card.Body>
        <Row>
          <Col xs={12}>{review}</Col>
        </Row>
        <Row>
          <Col xs={12}>{artist}</Col>
        </Row>
        </Card.Body>
          {user && user.user === userID ? 
            <Row>
              <Col xs={1}>
                <Button onClick={() => handleEdit(id)}>Edit Review</Button>
              </Col>
              <Col xs={1}>
                <Button onClick={() => handleDelete(id)}>Delete Review</Button>
              </Col>
          </Row>
            : 
            null}
      </Card>
    </>
  )
}
