import { RightOutlined } from '@ant-design/icons';
import { Col } from 'antd';

const InvoiceList = (props: any) => {
    const { item } = props;

    return (
        <div className="d-flex justify-space-between align-center  bg-blue">
            <Col span={4}>{item.id}</Col>
            <Col span={4}>Due {item.paymentDue}</Col>
            <Col span={4}>{item.clientName}</Col>
            <Col span={4}>{item.total}</Col>
            <Col span={4}>{item.state}</Col>
            <Col span={2}>
                <RightOutlined />
            </Col>
        </div>
    );
};

export default InvoiceList;
