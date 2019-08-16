import React from 'react'
import { Comment, List, Form, Input, Button } from 'antd';
import axios from 'axios'
//import { Comment, Tooltip, List } from 'antd';
//import moment from 'moment';

// const data = [
//     {
//         actions: [<span>Reply to</span>],
//         author: 'Han Solo',
//         avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
//         content: (
//             <p>
//                 We supply a series of design principles, practical patterns and high quality design
//                 resources (Sketch and Axure), to help people create their product prototypes beautifully and
//                 efficiently.
//       </p>
//         ),
//         datetime: (
//             <Tooltip
//                 title={moment()
//                     .subtract(1, 'days')
//                     .format('YYYY-MM-DD HH:mm:ss')}
//             >
//                 <span>
//                     {moment()
//                         .subtract(1, 'days')
//                         .fromNow()}
//                 </span>
//             </Tooltip>
//         ),
//     },
//     {
//         actions: [<span>Reply to</span>],
//         author: 'Han Solo',
//         avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
//         content: (
//             <p>
//                 We supply a series of design principles, practical patterns and high quality design
//                 resources (Sketch and Axure), to help people create their product prototypes beautifully and
//                 efficiently.
//       </p>
//         ),
//         datetime: (
//             <Tooltip
//                 title={moment()
//                     .subtract(2, 'days')
//                     .format('YYYY-MM-DD HH:mm:ss')}
//             >
//                 <span>
//                     {moment()
//                         .subtract(2, 'days')
//                         .fromNow()}
//                 </span>
//             </Tooltip>
//         ),
//     },
// ];

class Comments extends React.Component {

    handleFormSubmit = (event, blogID) => {
        const { comment, name } = event.target
        const time = new Date()

        axios.post("http://miniblog-react-django-app.herokuapp.com/api/comment/", {
            comment: comment.value,
            name: name.value,
            time: time.toISOString(),
            blog: blogID
        })
            .then(res => console.log(res))
            .catch(error => console.error(error))
    }

    render() {
        return (
            <div>
                <List
                    className="comment-list"
                    header={`${this.props.data.length} replies`}
                    itemLayout="horizontal"
                    dataSource={this.props.data}
                    renderItem={item => (
                        <li>
                            <Comment
                                actions={item.actions}
                                author={item.name}
                                avatar={item.avatar}
                                content={item.comment}
                                datetime={item.datetime}
                            />
                        </li>
                    )}
                />
                <br />
                <Form onSubmit={(event) => this.handleFormSubmit(
                    event,
                    this.props.blogID
                )}>
                    <Form.Item label="Comment">
                        <Input.TextArea name="comment" placeholder="Enter some comments" autosize={{ minRows: 2, maxRows: 10 }} />
                    </Form.Item>
                    <Form.Item label="Name">
                        <Input name="name" placeholder="Your name" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" >Post</Button>
                    </Form.Item>
                </Form>
            </div>

        )
    }
}

export default Comments