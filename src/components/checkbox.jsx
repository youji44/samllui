import {Form, Checkbox, Typography} from 'antd';
export const CitiesCheckbox = ({name,label, text, size, disabled,required,message, checked, ...props}) => {
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
            <Checkbox  
                checked={checked}  
                disabled={disabled || false}  
                {...props}
                >
                  {
                    text || ''
                  }
            </Checkbox>
    </Form.Item>  
  )
}