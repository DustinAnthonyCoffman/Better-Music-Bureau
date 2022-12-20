
//components
import {Card, Row, Col, Button, Form} from 'react-bootstrap'
import { useNavigate, Link } from 'react-router-dom';

//hooks
import { useForm, SubmitHandler } from "react-hook-form";
import {useLogin} from '../../Hooks/useLogin'

//dependencies
import * as yup from 'yup'

//interfaces
import { Inputs } from '../../Interfaces/interfaces'





export const Login = () => {
    //TODO
    // const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
    //     resolver: yupResolver(schema),
    // })
const {login, error, isLoading} = useLogin()

const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
const navigate = useNavigate()

const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(4).max(15).required(),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null])
})

const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const email: string = data.email
    const password: string = data.password
    await login(email, password)
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
                            <Col xs={12}>
                                <Button type='submit' variant='primary' disabled={isLoading}>Login</Button>
                            </Col>
                            <>{errors.confirmPassword && "Passwords Should Match"}</>
                        </Row>
                        {error && <div className="error">{error}</div>}
                    </Form>
                    <Row>
                        <Col xs={12}>
                            <Link to='/signup'>Signup</Link>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
        )
}