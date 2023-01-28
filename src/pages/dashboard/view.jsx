import {Modal, Space, Typography} from 'antd';
const {Text} = Typography;

const View = ({visible, viewData,onClose}) => {
  return (
    <div>
        <Modal
            title={viewData?.name} 
            centered
            width={700}
            visible={visible}
            onOk={onClose}
            onCancel={onClose}
            footer={null}
        >
            <Space direction='vertical'>
                <Space>
                    <Text strong>Time:</Text>
                    <Text>
                        {
                            viewData?.dateTime
                        }
                    </Text>
                </Space>
                <Space>
                    <Text strong>IP Address:</Text>
                    <Text>
                        {
                            viewData?.ipAddress
                        }
                    </Text>
                </Space>
                <Space>
                    <Text strong>Browser:</Text>
                    <Text>
                        {
                            viewData?.browsersDetails
                        }
                    </Text>
                </Space>
            </Space>
        </Modal>
    </div>
  )
}
export default View