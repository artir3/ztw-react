import React, { PureComponent} from 'react';
import './App.css';
import Header from './header/Header';
import Main from './main/Main';


export const Auth = React.createContext(false);

class App extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        }
    }

    store ={
        authentication_token: localStorage.getItem('token'),
        authenticated: Boolean(localStorage.getItem('isloged'))
    }

    logOut = () => {
        let b = !this.store.authenticated;
        // localStorage.setItem('isloged', b.toString());
        localStorage.clear();
        this.toggleLoggingModal();
        // this.props.history.push("/login/");
    }

    toggleLoggingModal = () => {
        this.setState({showModal: !this.state.showModal});
    }

    render() {
        return (
            <div className="App">
                <Auth.Provider value={this.store.authenticated}>
                    <Header showsModal={this.state.showModal}
                            logOut={this.logOut}
                            toggleLoggingModal={this.toggleLoggingModal}/>
                    <Main />
                    <p>{this.store.authenticated}{this.store.authentication_token}</p>
                </Auth.Provider>
            </div>
        )
    }
}

export default App;
