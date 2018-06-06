import React, {Component} from 'react';
// import Contact from '../components/contact/contact'
import './App.css';
import Header from './header/Header'
import Main from './main/Main'

class App extends Component {
    state = {
        logged: false,
        loggedModal: false,
        email: "",
        password: ""
    }

    logInMe = (event, email, password) => {
        const em = "d@d.d";
        const pass = "123qwe";
        const bool = em.valueOf() == email.valueOf().toString() && pass.valueOf()== password.valueOf().toString();
        this.setState({logged: bool});
        this.toggleLoggingModal();
    }

    toggleLoggingModal = () => {
        this.setState({loggedModal: !this.state.loggedModal})
    }

    render() {
        return (
            <div className="App">
                <Header isLogged={this.state.logged}
                        isLoggedModal={this.state.loggedModal}
                        logInMe={(event) => this.logInMe(event, this.state.email, this.state.password)}
                        toggleLoggingModal={this.toggleLoggingModal}/>
                <Main/>
            </div>
        )
    }
}

export default App;
