import {useFormSubmit} from '../Hooks/useFormSubmit'
import {Button, Image, Row, Col} from 'react-bootstrap'
import './Modals.css'




export const ReviewDetailsModal = (props: {_id: string, artist: string, title: string, review: string, reviewImage: any, banner: string, author: string, authorBand: string, setReviewDetailsModal: any, setDeleteModal: any, setEditModal: any} ) => {
  const {deleteReview, error} = useFormSubmit();
  const {_id, title, artist, review, reviewImage, author, authorBand, banner, setEditModal, setDeleteModal, setReviewDetailsModal} = props;

  const deleteHandler = async () => {
    const response = await deleteReview(_id)
    if(response) {
      setDeleteModal(false)
    }
    else {
      return error
    }
  }
  return (
    <div className='review-detail-modal'>
      <Row>
        <Col><h2>Title: {title}</h2></Col>
      </Row>
      <Image 
        src={`data:${reviewImage.contentType};base64,${reviewImage.imageBase64}`} 
        alt='Review Image' 
        className='review-image' 
        />
      <Row>
        <Col><h3>Artist: {artist}</h3></Col>
      </Row>
      <Row>
        <Col>{review}</Col>
      </Row>
      <Row>
        <Col>
          Written by {author} of {authorBand}
        </Col>
      </Row>
    
      <p>{review}</p>
      <div>
        <Button onClick={deleteHandler}>Delete</Button>
        <Button onClick={() => setDeleteModal(false)}>Cancel</Button>
        <Button onClick={() => setReviewDetailsModal(false)}>Back</Button> 
        <Button type='submit' className='col btn btn-dark mx-4'>Submit</Button>
        <Button type='submit' className='col btn btn-dark mx-4'onClick={() => setEditModal(false)}>Cancel</Button>
      </div>
    </div>
  )
}





