//components
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

//css
import './signup.css'

//interfaces
import { Inputs } from '../../Interfaces/interfaces'

//dependencies 
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from 'yup'
import { useNavigate, Link} from 'react-router-dom';

//hooks
import { useSignup } from '../../Hooks/useSignup';




export const Signup = () => {
    //TODO
    // const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
    //     resolver: yupResolver(schema),
    // })

const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
const navigate = useNavigate()
const {signup, error, isLoading} = useSignup()

const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(4).max(15).required(),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null])
})

const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const email: string = data.email
    const password: string = data.password
    console.log('before we fetch', data)
    await signup(email, password)
} 

    return (
        <>  
            <Card className='shadow-lg col-sm-6'>
                <Card.Header className='text-primary signup py-4'>Better Music Bureau </Card.Header>
                <Card.Body className='m-3'>
                    <Form onSubmit={handleSubmit(onSubmit)} className='shadow-4-strong'>
                        <Row>
                            <Col xs={5}>
                                <Form.Label htmlFor='email'>Email</Form.Label>
                            </Col>
                            <Col xs={5}>
                                <input className='mb-4' type='text' {...register('email', {required: true })} {...register} />
                                <>{errors.email?.message}</>
                            </Col>
                        </Row>    
                        <Row>
                            <Col xs={5}>
                                <Form.Label htmlFor='password'>Password</Form.Label>
                            </Col>
                            <Col xs={5}>
                                <input className='mb-4' type='password' {...register('password', {required: true })} {...register} />
                                <>{errors.password?.message}</>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={5}>
                                <Form.Label htmlFor='password'>Confirm Password</Form.Label>
                            </Col>
                            <Col xs={5}>
                                <input className='mb-4' type='password' {...register('confirmPassword', {required: true })} {...register} />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12}>
                                <Button type='submit' variant='primary' disabled={isLoading}>Sign Up</Button>
                            </Col>
                            <>{errors.confirmPassword && "Passwords Should Match"}</>
                        </Row>
                        {error && <div className="error">{error}</div>}
                    </Form>
                    <Row>
                        <Col xs={12}>
                            <Link to='/login'>Login</Link>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
        )
}
