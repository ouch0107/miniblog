import React from 'react'
import { Descriptions } from 'antd';
import { connect } from 'react-redux'

class Profile extends React.Component {



    render() {
        return (
            <Descriptions title="User Info" layout="vertical" bordered column={2}>

                {
                    this.props.isAuthenticated ?

                        <Descriptions.Item label="Name">Dennis</Descriptions.Item>

                        :

                        <Descriptions.Item label="Name">Jack</Descriptions.Item>
                }
                <Descriptions.Item label="Email">jack@gmail.com</Descriptions.Item>
                <Descriptions.Item label="Bio" span={2}>
                    Hey
                </Descriptions.Item>


            </Descriptions>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.token !== null
    }
}

export default connect(mapStateToProps)(Profile)