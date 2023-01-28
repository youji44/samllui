import {Form, Switch, Typography} from 'antd';
export const CitiesSwitch = ({name,label, size, disabled,required,message, checked, onChange, ...props}) => {
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
            <Switch 
                checked={checked} 
                onChange={onChange} 
                size={size || 'middle'}
                disabled={disabled || false}
                {...props}
                />
    </Form.Item>  
  )
}