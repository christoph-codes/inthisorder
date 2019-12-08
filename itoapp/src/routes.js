// routes.js
import React from 'react'
import {Route, IndexRoute} from 'react-router'
import App from './app/'
import Home from './app/views/home'
import About from './app/views/about'
import Recent from './app/views/recent'
import Articles from './app/views/articles'
import Donate from './app/views/donate'
import Random from './app/views/random'
import NoMatch from './app/views/NoMatch'

export default(
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="support/*" component={About}/>
        <Route path="recent" component={Recent}/>
        <Route path="random" component={Random}/>
        <Route path="donate" component={Donate}/>
        <Route path="articles" component={Articles}/>
        <Route path="*" component={NoMatch}/>
    </Route>
)