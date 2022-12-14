import React from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from 'yup'
import axios from 'axios'
import { Inputs } from '../../Interfaces/interfaces'
import './signup.css'





export const Signup = () => {
    // const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
    //     resolver: yupResolver(schema),
    // })
const coffee = <FontAwesomeIcon icon={faCoffee} />
const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(4).max(15).required(),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null])
})

const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const email: string = data.email
    const password: string = data.password
    const confirmPassword: string = data.confirmPassword
    console.log('data', data)
        // const res = await axios.post('http://localhost:8080/signup', {
    //     email: email,
    //     password: password
    // }).then(function(res) {
    //     console.log(res)
    // }).catch(function (error) {
    //     console.log(error)
    //     console.log('ah shit heres the error', error)
    // })
    const response = await fetch('http://localhost:8080/signup', {
        method: 'POST', 
        mode: 'cors',
        cache: 'no-cache', 
        credentials: 'same-origin', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: email, password: password})
    })
    console.log('the response', response)
} 

    return (
        <>  
            <Card className='shadow-lg'>
                <Card.Header className='text-primary signup py-4'>Better Music Bureau {coffee} </Card.Header>
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
                                <Button type='submit' variant='primary'>Sign Up</Button>
                            </Col>
                            <>{errors.confirmPassword && "Passwords Should Match"}</>
                        </Row>
                    </Form>
                </Card.Body>
            </Card>
        </>
        )
}
