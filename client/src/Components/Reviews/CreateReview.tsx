
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

//context
import { useAuthContext } from '../../Hooks/useAuthContext';

export const CreateReview = () => {

const { register, handleSubmit, formState: { errors } } = useForm<ReviewInputs>();
const {createReview, error, isLoading} = useFormSubmit()
const navigate = useNavigate();
const {user} = useAuthContext()


// const schema = yup.object().shape({
//     title: yup.string().required(),
//     review: yup.string().required(),
//     artist: yup.string().required()
// })

const onSubmit: SubmitHandler<ReviewInputs> = async (data) => {
    const title: string = data.title
    const review: string = data.review
    const artist: string = data.artist
    const author: string = data.author
    const authorBand: string = data.authorBand
    const banner: string = data.banner
    const userID = user
    const reviewImage: any = data.reviewImage[0]
    
    
    const formData = new FormData();
    formData.append("title", title);
    formData.append("review", review);
    formData.append("artist", artist);
    formData.append("author", author);
    formData.append("authorBand", authorBand);
    formData.append("banner", banner);
    formData.append("userID", userID);
    formData.append("reviewImage", reviewImage);

    await createReview(formData)
    navigate('/adminReviews')
} 
    return (
        <>  
            <Form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                <Form.Label>Create A Review</Form.Label>
                <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Title" {...register('title', {required: true })} {...register} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Artist</Form.Label>
                    <Form.Control type="text" placeholder="Artist" {...register('artist', {required: true })} {...register} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Author</Form.Label>
                    <Form.Control type="text" placeholder="Author" {...register('author', {required: true })} {...register} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Author Band</Form.Label>
                    <Form.Control type="text" placeholder="Author Band" {...register('authorBand', {required: true })} {...register} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Upload An Image</Form.Label>
                    <Form.Control type="file" placeholder="Upload" {...register('reviewImage', {required: true })} {...register} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Banner</Form.Label>
                    <Form.Control type="text" placeholder="Banner" {...register('banner', {required: true })} {...register} />
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
