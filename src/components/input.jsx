import {Form, Input, Typography} from 'antd';
export const CitiesInput = ({name,label,type, size, disabled,required,message,value,placeholder, textArea, ...props}) => {
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
            {
                textArea?
                <Input.TextArea
                    placeholder={placeholder || ''} 
                    value={value || ''} 
                    {...props}
                />:
                <Input 
                    type={type || 'text'}
                    placeholder={placeholder || ''} 
                    value={value || ''} 
                    size={size || 'middle'}
                    disabled={disabled || false}
                    {...props}
                />
            }
    </Form.Item>  
  )
}