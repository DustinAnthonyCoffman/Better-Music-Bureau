import { DeleteReviewModalI } from '../Interfaces/interfaces'
import { Card } from 'react-bootstrap'

//fix THIS!!!! CANNOT BE TYPE ANY
export const DeleteReviewModal: any = (id: string) => {
  return (
    <>
    <Card>
        <Card.Header>Are you sure you wish to delete "this review"?</Card.Header>
        <Card.Body>
        <p>ARE YOOU SURE ABOUT THIS DAWG????</p>
        </Card.Body>
    </Card>
    </>
  )
}
