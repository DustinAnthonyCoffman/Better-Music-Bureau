//components
import {Col, Form, Button, Row, Card} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'

//css
import './signup.css'

//interfaces
import { Inputs } from '../../Interfaces/interfaces'

//dependencies 
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from 'yup'

//hooks
import { useSignup } from '../../Hooks/useSignup';




export const Signup = () => {
    //TODO
    // const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
    //     resolver: yupResolver(schema),
    // })

const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
const {signup, error, isLoading} = useSignup()

const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(4).max(15).required(),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null])
})

const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const email: string = data.email
    const password: string = data.password
    await signup(email, password)
} 

    return (
        <>  
            <Card className='shadow-lg col-sm-6'>
                <Card.Header className='signup py-4'>Better Music Bureau </Card.Header>
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
                                <Button type='submit' className='btn-secondary' variant='primary' disabled={isLoading}>Sign Up</Button>
                            </Col>
                            <>{errors.confirmPassword && "Passwords Should Match"}</>
                        </Row>
                        {error && <div className="error">{error}</div>}
                    </Form>
                    <Row className='pt-5'>
                        <Col xs={3}>Already have an account?</Col>
                        <Col xs={5}>
                            
                            <NavLink to='/login'>Login</NavLink>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
        )
}
