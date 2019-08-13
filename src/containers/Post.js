import React from 'react'
import CustomForm from '../components/Form'

class Post extends React.Component {
    render() {
        return (
            <CustomForm requestMethod="post" blogID={null} />
        )
    }
}

export default Post