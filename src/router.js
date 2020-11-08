import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from '../src/pages/home/index';

export default function router() {
    return (
        <BrowserRouter>
            <Route path="/RiccardoCafa/" exact component={Home}/>
        </BrowserRouter>
    );
}