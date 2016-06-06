import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './modules/App.js'



render((
    <Router history={browserHistory}>
        <Route path="/" component={App} />
    </Router>
), document.getElementById('app')) 