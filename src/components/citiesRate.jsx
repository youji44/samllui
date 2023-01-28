import {Form, Rate, Typography} from 'antd';
export const CitiesRate = ({name,label, size, disabled,required,message,value, ...props}) => {
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
            <Rate 
                allowHalf 
                size={size || 'middle'}
                value={value} 
                disabled={disabled || false}
                {...props}
                />
    </Form.Item>  
  )
}