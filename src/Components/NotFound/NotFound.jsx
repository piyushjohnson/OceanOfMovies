import React from 'react';
import {Row,Col,Typography} from 'antd'
const {Title} = Typography;

export default function NotFound() {
    return (
        <Row>
            <Col span="24">
                <Title>Oops! Not Found</Title>
            </Col>
        </Row>
    )
}