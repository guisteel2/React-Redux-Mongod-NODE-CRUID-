import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Todo from '../todo/todo'
import About from '../about/about'


export default props => (
    
    <Router history={hashHistory}>
        <Route path='/todos' components={Todo} />
        <Route path='/about' components={About} />
        <Redirect from='*' to='/todos'></Redirect>
    </Router>
   
)