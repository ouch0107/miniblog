import React from 'react'
import { Form, Input, Button } from 'antd';
import axios from 'axios'

class CustomForm extends React.Component {

    handelFormSubmit = (event, requestMethod, blogID) => {
        const { title, content } = event.target
        const time = new Date()

        switch (requestMethod) {
            case "post":
                axios.post("https://miniblog-react-django-app.herokuapp.com/api/blog/", {
                    title: title.value,
                    content: content.value,
                    time: time.toISOString().slice(0, 10)
                })
                    .then(res => console.log(res))
                    .catch(error => console.error(error))
                break
            case "put":
                axios.put(`https://miniblog-react-django-app.herokuapp.com/api/blog/${blogID}`, {
                    title: title.value,
                    content: content.value,
                    time: time.toISOString().slice(0, 10)
                })
                    .then(res => console.log(res))
                    .catch(error => console.error(error))
                break
            default:
                break
        }


    }

    render() {
        var FormButton;
        if (this.props.requestMethod === "post") {
            FormButton = <Button type="primary" htmlType="submit" >Post</Button>
        }
        else if (this.props.requestMethod === "put") {
            FormButton = <Button type="primary" htmlType="submit" >Put</Button>
        }

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
                        {FormButton}
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

export default CustomForm