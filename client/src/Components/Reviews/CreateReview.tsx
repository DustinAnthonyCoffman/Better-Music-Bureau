
//components
import {Form, Col, Row, Button} from 'react-bootstrap'

//interfaces
import { ReviewInputs } from '../../Interfaces/interfaces'

//hooks
import {useFormSubmit} from '../../Hooks/useFormSubmit'

//dependencies
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom';

export const CreateReview = () => {

const { register, handleSubmit, formState: { errors } } = useForm<ReviewInputs>();
const {createReview, error, isLoading} = useFormSubmit()
const navigate = useNavigate();



const schema = yup.object().shape({
    title: yup.string().required(),
    review: yup.string().required(),
    artist: yup.string().required()
})

const onSubmit: SubmitHandler<ReviewInputs> = async (data) => {
    const title: string = data.title
    const review: string = data.review
    const artist: string = data.artist
    await createReview(title, review, artist)
    navigate('/adminReviews')
} 
    return (
        <>  
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Label>Create A Review</Form.Label>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Title" {...register('title', {required: true })} {...register} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Artist</Form.Label>
                    <Form.Control type="text" placeholder="Artist" {...register('artist', {required: true })} {...register} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Review</Form.Label>
                    <Form.Control as="textarea" rows={12} {...register('review', {required: true })} {...register} />
                    <>{errors.review?.message}</>
                </Form.Group>
                <Row>
                    <Col xs={12}>
                        <Button type='submit' variant='primary' disabled={isLoading}>Submit</Button>
                    </Col>
                </Row>
            </Form>
        </>
        )
}
