import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import About from '../pages/About/About'
import Contact from '../pages/Contact/Contact'
import Home from '../pages/Home/Home'

function Routes(){
    return (
        <BrowserRouter>

            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
         
        </BrowserRouter>
    )
}

export default Routes