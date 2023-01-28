import {Form, Checkbox, Typography} from 'antd';
export const MyRadioGroup = ({name,label,required,message,value, options}) => {
  return (
    <Form.Item
        name={name}
        rules={[
            {
            required,
            message,
            },
        ]}
        label={<Typography.Text strong>{label}</Typography.Text>}
        >
            <Checkbox.Group 
                options={options} 
                value={value} 
            />
    </Form.Item>  
  )
}