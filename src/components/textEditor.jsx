import {Form, Typography} from 'antd';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export const CitiesTextEditor = ({name,label, disabled,required,message,value,onChange, ...props}) => {
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
            <ReactQuill 
                theme="snow" 
                // value={value} 
                onChange={onChange} 
                disabled={disabled || false}
                {...props}
            />
    </Form.Item>  
  )
}