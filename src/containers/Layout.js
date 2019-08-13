import React from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import * as actions from '../store/actions/auth'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


class CustomLayout extends React.Component {

    render() {
        return (
            <Layout>
                <Header className="header">
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1">
                            <Link to='/post'>Posts</Link>
                        </Menu.Item>
                        {
                            this.props.isAuthenticated ?

                                <Menu.Item key="2" onClick={this.props.logout} >
                                    Logout
                                </Menu.Item>

                                :

                                <Menu.Item key="2">
                                    <Link to='/login'>Login</Link>
                                </Menu.Item>
                        }


                    </Menu>
                </Header>
                <Layout>
                    <Sider width={200} style={{ background: '#fff' }}>
                        <Menu
                            mode="inline"
                            style={{ height: '100%', borderRight: 0 }}
                        >
                            <SubMenu
                                key="sub1"
                                title={
                                    <span>
                                        <Icon type="user" />
                                        Username
                                </span>
                                }
                            >
                                <Menu.Item key="1">
                                    <Link to='/profile'>Profile</Link>
                                </Menu.Item>
                                <Menu.Item key="2">blogs</Menu.Item>

                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item><Link to='/'>Home</Link></Breadcrumb.Item>
                        </Breadcrumb>
                        <Content
                            style={{
                                background: '#fff',
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}
                        >
                            {this.props.children}
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout())
    }
}

export default connect(null, mapDispatchToProps)(CustomLayout)
