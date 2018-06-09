import React, {Component} from 'react';
import '../login/Login.css';
import UsersApi from '../../../api/UsersApi';

const Api = UsersApi;

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            city: "",
            email: "",
            name: "",
            surname: "",
            pass: "",
            repeat_pass: ""
        };
    }

    render() {
        return (
            <div className="Register">
                <form onSubmit={this.handleSubmit} onReset={this.handleReset}>
                    <div>
                        <label>Name:</label>
                        <input type="text" name="name" value={this.state.name}
                               onChange={this.handleLoginChange.bind(this)}/>
                    </div>
                    <div>
                        <label>Surname:</label>
                        <input type="text" name="surname" value={this.state.surname}
                               onChange={this.handleLoginChange.bind(this)}/>
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type="password" name="pass" value={this.state.pass}
                               onChange={this.handleLoginChange.bind(this)}/>
                    </div>
                    <div>
                        <label>Repeat password:</label>
                        <input type="password" name="repeat_pass" value={this.state.repeat_pass}
                               onChange={this.handleLoginChange.bind(this)}/>
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="email" name="email" value={this.state.email}
                               onChange={this.handleLoginChange.bind(this)}/>
                    </div>
                    <div>
                        <label>City:</label>
                        <input type="text" name="city" value={this.state.city}
                               onChange={this.handleLoginChange.bind(this)}/>
                    </div>
                    <div>
                        <input type="submit" value="Register"/>
                        <input type="reset" value="Cancel"/>
                    </div>
                </form>
            </div>
        )
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.pass.valueOf() === this.state.repeat_pass.valueOf()) {
            alert("Zarejestrowano");
            Api.push("users",{
                email: this.state.email,
                city: this.state.city,
                id: 0,
                name: this.state.name,
                password: this.state.pass,
                surname: this.state.surname
            });
            this.handleReset();
            this.props.history.push("/login/");
        } else {
            alert("Write dow corect values");
        }
    }

    handleReset = () => {
        this.setState({
            id: 0,
            city: "",
            email: "",
            name: "",
            surname: "",
            pass: "",
            repeat_pass: ""
        });
    }

    handleLoginChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
}

export default Register;