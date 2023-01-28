import { useEffect } from "react"
import {Form, Image, Button, message, Space, Row, Col} from "antd"
import {useShareDispatch, useShareSelector,actionsApi} from "../../shared"
import { CitiesInput} from '../../components';
const Login=()=>{
    const appDispatcher=useShareDispatch()
    const [form] = Form.useForm()
    const {loading, error} = useShareSelector(state => state?.login)
    useEffect(()=>{
        if(error)
        {
            message.error(error)
            appDispatcher(actionsApi?.loginClear())
        }
    },[error])
    const login=()=>{
        appDispatcher(actionsApi?.login(form.getFieldsValue(['email','password'])))
    }
    return (
        <div  
            className='center login-form-cover'
            // style={{backgroundImage:"url(/assets/images/hair-transplant.png)"}}
            >
            <Space direction='vertical' size={30} className='login-form py-5 px-4 shadow'
                // style={{backgroundImage:"url(/assets/images/hair-transplant-1.png)"}}
                >
                <div className="justify-center">
                    <Image
                        src={"./assets/images/logo.svg"}
                        />
                </div>
                <Form
                    form={form}
                    layout="vertical"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={login}
                    style={{width:'100%'}}
                >
                    <Row gutter={[0,4]}>
                        <Col span={24} className='border'>
                            <CitiesInput 
                                name="email" 
                                label="Email" 
                                size='large'
                                required 
                                message='Please enter email' 
                                placeholder='' 
                                value={form.getFieldValue('email') || ''}
                                />
                        </Col>
                        <Col span={24} className='border'>
                            <CitiesInput 
                                name="password" 
                                type='password'
                                size='large'
                                label="Password" 
                                required 
                                message='Please enter password' 
                                placeholder='' 
                                value={form.getFieldValue('password') || ''}
                                />
                        </Col>
                        <Col span={24}>
                            <Button type="primary" htmlType="submit" loading={loading}>
                                Log in
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Space>
        </div>
    )
}
export default Login