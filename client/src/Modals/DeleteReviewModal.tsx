import { Card } from 'react-bootstrap'
import {useFormSubmit} from '../Hooks/useFormSubmit'
import {Button} from 'react-bootstrap'


export const DeleteReviewModal = (props: {_id: string, title: string, setDeleteModal: any} ) => {
  
  // type Props = {
  //   onClick: React.MouseEventHandler<HTMLButtonElement>
  // };
  const {deleteReview, error} = useFormSubmit();
  const {_id, title, setDeleteModal} = props;

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
    <>
      <Card>
        <Card.Header>Are you sure you wish to delete {title}?</Card.Header>
        <Card.Body>
          <Button onClick={deleteHandler}>Delete</Button>
          <Button onClick={() => setDeleteModal(false)}>Cancel</Button>
        </Card.Body>
      </Card>
    </>
  )
}
