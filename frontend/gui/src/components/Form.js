import React from 'react'
import { Form, Input, Button } from 'antd';
import axios from 'axios'

class CustomForm extends React.Component {

    handelFormSubmit = (event, requestMethod, blogID) => {
        const { title, content } = event.target
        const time = new Date()

        axios.post("http://127.0.0.1:8000/api/blog/", {
            title: title.value,
            content: content.value,
            time: time.toISOString().slice(0, 10)
        })
            .then(res => console.log(res))
            .catch(error => console.error(error))
    }

    render() {

        return (
            <div>
                <Form onSubmit={(event) => this.handelFormSubmit(
                    event,
                    this.props.requestMethod,
                    this.props.blogID
                )} >
                    <Form.Item label="Title">
                        <Input name="title" placeholder="Title" />
                    </Form.Item>
                    <Form.Item label="Content">
                        <Input.TextArea name="content" placeholder="Enter content here..." autosize={{ minRows: 2, maxRows: 10 }} />
                    </Form.Item>
                    <Form.Item label="Name">
                        <Input name="name" placeholder="Your name" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" >Post</Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

export default CustomForm