import {Form, TimePicker, DatePicker, Typography} from 'antd';
import moment from 'moment';
export const CitiesDateTimePicker = ({name,label, disabled,required,message,value, rangePicker, datePicker, ...props}) => {
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
                datePicker?
                <DatePicker
                    disabled={disabled || false}
                    value={value?moment(value, 'YYYY-MM-DD'):''}
                    style={{width:'100%'}}
                    {...props}
                />
                :
                rangePicker?
                <DatePicker.RangePicker  
                    disabled={disabled || false}
                    value={value?moment(value, 'YYYY-MM-DD'):''}
                    style={{width:'100%'}}
                    {...props}
                />:
                <TimePicker  
                    disabled={disabled || false}
                    value={moment(value || '00:00')} 
                    format='HH:mm'
                    style={{width:'100%'}}
                    {...props}
                />
            }
    </Form.Item>  
  )
}