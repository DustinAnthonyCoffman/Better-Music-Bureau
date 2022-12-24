
//components
import {Form, Col, Row, Button} from 'react-bootstrap'

//interfaces
import { ReviewInputs } from '../Interfaces/interfaces'

//hooks
import {useFormSubmit} from '../Hooks/useFormSubmit'

//dependencies
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom';
import {useState} from 'react'

// type Props = {
//     onClick: React.MouseEventHandler<HTMLButtonElement>
//   };

// Interface Props { onClick: (e: Event) => void; }

export const EditReviewModal = (props: {_id: string, title: string, review: string, artist: string, setEditModal: any}) => {

const { register, handleSubmit, formState: { errors } } = useForm<ReviewInputs>();
const {editReview, error, isLoading} = useFormSubmit()
const navigate = useNavigate();
// const {_id, setEditModal, title, review, artist } = props
const {_id, setEditModal} = props
const [title, setTitle] = useState(props.title)
const [artist, setArtist] = useState(props.artist)
const [review, setReview] = useState(props.review)


const schema = yup.object().shape({
    title: yup.string().required(),
    review: yup.string().required(),
    artist: yup.string().required()
})

const onSubmit: SubmitHandler<ReviewInputs> = async (data) => {
    setEditModal(false)
    data.id = _id
    await editReview(data)
    navigate('/adminReviews')
} 
    return (
        <>  
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Label>Edit Review</Form.Label>
                <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder={title} {...register('title', {required: true })} {...register} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Artist</Form.Label>
                    <Form.Control type="text" placeholder={artist} {...register('artist', {required: true })} {...register} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Review</Form.Label>
                    <Form.Control as="textarea" placeholder={review} rows={12} {...register('review', {required: true })} {...register} />
                    <>{errors.review?.message}</>
                </Form.Group>
                <Row>
                    <Col xs={12}>
                        <Button type='submit' variant='primary' disabled={isLoading}>Submit</Button>
                        <Button type='submit' variant='primary' disabled={isLoading} onClick={() => setEditModal(false)}>Cancel</Button>
                    </Col>
                </Row>
            </Form>
        </>
        )
}
