import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Contact from "../../../components/contact/Contact";
import Home from '../../home/Home'
import './Main.css'
import Login from "../login/Login";
import Register from "../register/Register";

const Main = (props) => (
    <main className="Main">
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/home/' component={Home}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/register' component={Register}/>
            <Route path='/login' component={Login}/>
        </Switch>
    </main>
)

export default Main;