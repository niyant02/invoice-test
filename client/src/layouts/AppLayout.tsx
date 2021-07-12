import { Component } from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

const { Content, Footer, Sider } = Layout;

class AppLayout extends Component {
    state = {
        current: window.location.pathname ? window.location.pathname : '/',
    };

    handleClick = (e: any) => {
        this.setState({ current: e.key });
    };

    render() {
        // const { current } = this.state;

        return (
            <>
                <Layout>
                    <Sider
                        style={{
                            overflow: 'auto',
                            height: '100vh',
                            position: 'fixed',
                            left: 0,
                        }}
                    >
                        {/* <div className="logo" /> */}
                        {/* <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                            <Menu.Item key="1" icon={<UserOutlined />}>
                                nav 1
                            </Menu.Item>
                            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                                nav 2
                            </Menu.Item>
                        </Menu> */}
                    </Sider>
                    <Layout className="site-layout" style={{ marginLeft: 200 }}>
                        <Content className="container">
                            <div style={{ padding: 24, textAlign: 'center' }}>{this.props.children}</div>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>
                            Created by Niyant Shah{' '}
                            <a href="https://github.com/niyant02" target="_blank" rel="noreferrer">
                                @niyant02
                            </a>
                        </Footer>
                    </Layout>
                </Layout>
            </>
        );
    }
}

export default AppLayout;
