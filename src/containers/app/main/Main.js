import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Contact from "../../../components/contact/Contact";
import Home from '../../home/Home'
import './Main.css'

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/contact' component={Contact}/>
        </Switch>
    </main>
)

export default Main;