import React, {Component} from 'react';
import './Login.css';
import UsersApi from "../../../api/ApiImpl";

const Api = UsersApi;

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pass: "",
            email: ""
        };
    }

    render() {
        return (
            <div className="Login">
                <form onSubmit={this.handleSubmit} onReset={this.handleReset}>
                    <div>
                        <label>Email:</label>
                        <input type="email" value={this.state.email} onChange={this.handleLoginChange.bind(this)}/>
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type="password"  value={this.state.pass} onChange={this.handlePassChange.bind(this)}/>
                    </div>
                    <div>
                        <input type="submit" value="Submit"/>
                        <input type="reset" value="Cancel"/>
                    </div>
                </form>
            </div>
        )
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        await Api.loginApi("users", {email: this.state.email, password: this.state.pass});
        var bool = await Boolean(localStorage.getItem('isloged')).valueOf();
        if (bool) {
            this.props.history.push("/");
        } else {
            alert("Write dow corect values");
        }
    }

    handleReset = () => {
        this.setState({login: "", pass: ""});
    }

    handleLoginChange = (event) => {
        this.setState({email: event.target.value});
    }

    handlePassChange = (event) => {
        const _pass = event.target.value;
        this.setState({pass: _pass});
    }
}

export default Login;