import React from 'react'
import axios from 'axios'

import { Card } from 'antd'
import Comments from '../components/Comments'
import CustomForm from '../components/Form'

class BlogDetail extends React.Component {

    state = {
        blog: {},
        comments: [],
    }

    componentDidMount() {
        const blogID = this.props.match.params.blogID

        axios.get(`http://miniblog-react-django-app.herokuapp.com/api/blog/${blogID}/`)
            .then(res => {
                this.setState({
                    blog: res.data
                })
            })

        axios.get("http://miniblog-react-django-app.herokuapp.com/api/comment/")
            .then(res => {
                this.setState({
                    comments: res.data
                })
            })

    }

    render() {
        const blogID = this.props.match.params.blogID

        return (
            <div>
                <Card title={this.state.blog.title}>
                    <p>{this.state.blog.content}</p>
                </Card>
                <br />
                <h2>Comments</h2>
                <Comments data={this.state.comments.filter(item => String(item.blog) === blogID)} blogID={this.props.match.params.blogID} />
                <br />
                <h2>Modify the blog</h2>
                <CustomForm requestMethod="put" blogID={blogID} />
            </div>
        )
    }
}

export default BlogDetail