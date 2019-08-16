import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

import Blogs from '../components/Blogs'

class BlogList extends React.Component {

    state = {
        blogs: [],
    }
    // Local machine url
    // http://127.0.0.1:8000/api/blog/
    componentDidMount() {
        axios.get('http://miniblog-react-django-app.herokuapp.com/api/blog/')
            .then(res => {
                this.setState({
                    blogs: res.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    // componentWillReceiveProps(newProps) {
    //     if (newProps.token) {
    //         axios.defaults.headers = {
    //             "Content-Type": "application/json",
    //             Authorization: `Token ${newProps.token}`
    //         }
    //         axios.get('http://127.0.0.1:8000/api/blog/')
    //             .then(res => {
    //                 this.setState({
    //                     blogs: res.data
    //                 })
    //             })
    //             .catch(err => {
    //                 console.log(err)
    //             })
    //     }
    // }

    render() {
        return (
            <div>
                <Blogs data={this.state.blogs} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.token
    }
}

export default connect(mapStateToProps)(BlogList)