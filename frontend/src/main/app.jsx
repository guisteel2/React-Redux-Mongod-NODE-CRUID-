import 'modules/bootstrap/dist/css/bootstrap.css'
import 'modules/font-awesome/css/font-awesome.css'
import '../template/temcss.css'

// import '../../node_modules/bootstrap/dist/css/bootstrap.css'
// import '../../node_modules/font-awesome/css/font-awesome.css'
import React from 'react'

import Menu from '../template/menu'
import Routes from './routes'

export default props =>(
    <div className='container'>
        <Menu />
        <Routes />
    </div>
)