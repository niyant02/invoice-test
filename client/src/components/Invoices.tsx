import { Helmet } from 'react-helmet';
import InvoiceList from './InvoiceList';
import { Layout, Row, Col, PageHeader, Select, Button, Space, Spin } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Invoice } from '../models/Invoice.model';
import { withApollo } from '@apollo/client/react/hoc';
import { GET_INVOICES } from '../services/queries';
import { Component } from 'react';

const { Content } = Layout;
const { Option } = Select;

class Invoices extends Component<any> {
    state = {
        data: [],
        status: null,
    };

    componentDidMount() {
        this.getInvoice();
    }

    onChange = (value: any) => {
        this.setState(
            {
                status: value,
            },
            () => {
                console.log(this.state);
                this.getInvoice();
            },
        );
    };

    getInvoice() {
        console.log('called...');
        const { client } = this.props;
        client
            .query({
                fetch: 'network-only',
                query: GET_INVOICES,
                various: {
                    status: this.state.status,
                },
            })
            .then((res: any) => {
                this.setState({
                    data: res.data.invoices,
                });
            })
            .catch((err: any) => console.log(err));
    }

    render() {
        const { data } = this.state;
        return (
            <>
                <Helmet>
                    <title>Invoice</title>
                </Helmet>
                <Layout>
                    <Content>
                        <Row gutter={24} align="middle" justify="space-between">
                            <Col span={6}>
                                <PageHeader className="site-page-header" title="Invoices" />
                            </Col>
                            <Col span={10} offset={2}>
                                <Space>
                                    <Select
                                        style={{ width: 200 }}
                                        placeholder="Filter by status"
                                        onChange={this.onChange}
                                    >
                                        <Option value="paid">Paid</Option>
                                        <Option value="pending">Pending</Option>
                                        <Option value="draft">Draft</Option>
                                    </Select>

                                    <Button type="primary" shape="round" icon={<PlusCircleOutlined />} size="large">
                                        New Invoice
                                    </Button>
                                </Space>
                            </Col>
                        </Row>
                        <Row gutter={24} align="middle" justify="space-between">
                            <Col span={12} offset={12}>
                                {!data && <Spin size="large" />}
                            </Col>
                            {data &&
                                data.map((item: Invoice, index: number) => <InvoiceList key={index} item={item} />)}
                        </Row>
                    </Content>
                </Layout>
            </>
        );
    }
}

export default withApollo(Invoices);
