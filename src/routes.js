import React from 'react'
import { Route } from 'react-router-dom'

import BlogList from './containers/BlogList'
import BlogDetail from './containers/BlogDetail'
import Login from './containers/Login'
import Signup from './containers/Signup'
import Post from './containers/Post'
import Profile from './containers/Profile'

const BaseRoute = () => (
    <div>
        <Route exact path="/" component={BlogList} />
        <Route exact path="/blog/:blogID/" component={BlogDetail} />
        <Route exact path='/login/' component={Login} />
        <Route exact path='/signup/' component={Signup} />
        <Route exact path='/post/' component={Post} />
        <Route exact path='/profile' component={Profile} />
    </div>
)

export default BaseRoute