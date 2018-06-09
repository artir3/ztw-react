import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Contact from "../../../components/contact/Contact";
import Home from '../../home/Home'
import './Main.css'
import Login from "../login/Login";
import Profile from "../../profile/Profile";

const Main = (props) => (
    <main className="Main">
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/home/' component={Home}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/register' component={Profile}/>
            <Route path='/login' component={Login}/>
            <Route path='/profile' component={Profile}/>

        </Switch>
    </main>
)

export default Main;