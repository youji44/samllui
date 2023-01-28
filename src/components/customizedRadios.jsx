import {Form, Radio, Typography, Space, Row, Col, Image} from 'antd';
const {Text}= Typography
export const CustomizedRadios = ({name,label, disabled,required,message,value, ...props}) => {
    const genders=[
        {
          gender:'Men',
          conditions:[
            'male1.png',
            'male2.png',
            'male3.png',
            'male4.png',
            'male5.png',
            'male6.png',
          ]
        },
        {
          gender:'Woman',
          conditions:[
            'female1.png',
            'female2.png',
            'female3.png'
          ]
        }
      ]
    return (
    <Form.Item
        name={name}
        label={<Typography.Text strong>{label}</Typography.Text>}
        rules={[
            {
            required,
            message,
            },
        ]}
        >
            <Radio.Group
                value={value}
                disabled={disabled}
                {...props}
                style={{width:'100%'}}
                >
                <Row>
                    {
                        genders?.map((gender, g)=>
                            <Col span={g===0?15:9} key={g}>
                                <Space size={8} direction='vertical'>
                                    <Text strong style={{textAlign:'center',width:'100%'}}>
                                        {
                                            gender?.gender
                                        }
                                    </Text>
                                    <Space size={25}>
                                        {
                                            gender?.conditions?.map((condition,c)=>
                                                <Space direction='vertical' key={c} className='flex-row-center'>
                                                    <Radio value={g===1?6+c+1:c+1}></Radio>
                                                    <Image 
                                                        src={'assets/images/'+condition} 
                                                        alt='hairtransplant' 
                                                        width={'33px'}
                                                        preview={false}
                                                        />
                                                </Space>
                                            )
                                        }
                                    </Space>
                                </Space>
                            </Col>
                        )
                    }
                </Row>
            </Radio.Group>
    </Form.Item>  
  )
}