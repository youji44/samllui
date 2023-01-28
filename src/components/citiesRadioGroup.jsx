import {Form, Radio, Typography} from 'antd';
export const CitiesRadioGroup = ({name,label,required,message,value, options}) => {
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
            <Radio.Group value={value}>
                {
                    options?.map((opt,o)=>
                        <Radio value={opt?.value} key={o}>{opt?.name}</Radio>
                    )
                }
            </Radio.Group>
    </Form.Item>  
  )
}