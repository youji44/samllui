import {Row, Col, Space, Button, Typography} from "antd"
import {PlusOutlined} from "@ant-design/icons"
export const ModuleInfo=({name})=>{
    return (
        <Row>
            <Col span={24}>
                <Space>
                    <Typography.Title level={4}>
                        {
                            name
                        }
                    </Typography.Title>
                </Space>
            </Col>
        </Row>
    )
}