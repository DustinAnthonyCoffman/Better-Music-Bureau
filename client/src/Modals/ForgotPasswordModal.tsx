//components
import {Card, Row, Col, Button, Form} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';


//hooks
import { useForm, SubmitHandler } from "react-hook-form";
import {useForgotPassword} from '../Hooks/useForgotPassword'

//dependencies
import * as yup from 'yup'

//interfaces
import { Inputs } from '../Interfaces/interfaces'

export const ForgotPasswordModal = () => {

  const {resetPassword} = useForgotPassword()
  
  const navigate = useNavigate();
  
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

  const schema = yup.object().shape({
      email: yup.string().email().required(),
      password: yup.string().min(4).max(15).required(),
      confirmPassword: yup.string().oneOf([yup.ref('password'), null])
  })

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
      const email: string = data.email
      await resetPassword(email)
      navigate('/')
  } 
    return (
      <div className='forgotPassword'>
        <Row>
          <Col>
            <Card className='shadow-lg col-sm-6 my-5 py-5'>
              <Card.Header className='login signup py-4'>Reset Password </Card.Header>
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
                      <Button type='submit'>Submit</Button>
                    </Form>   
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
  )
}
