import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Login from './pages/Login/Login'
import Home from './pages/Home/Home'

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Login} />
            <Route path="/home" component={Home} />
        </BrowserRouter>
    )
}
