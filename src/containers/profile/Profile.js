import React, {Component} from 'react';
import UsersApi from '../../api/ApiImpl';
import ProfileForm from '../../components/ProfileForm'

const Api = UsersApi;

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: localStorage.getItem('u_id'),
            city: localStorage.getItem('u_city'),
            email: localStorage.getItem('u_email'),
            name: localStorage.getItem('u_name'),
            surname: localStorage.getItem('u_surname'),
            pass: "", oldpass: "",
            repeat_pass: ""
        };
    }


    render() {
        return (
            <ProfileForm
                id={this.state.id}
                city={this.state.city}
                email={this.state.email}
                name={this.state.name}
                surname={this.state.surname}
                oldpass={this.state.oldpass}
                pass={this.state.pass}
                repeat_pass={this.state.repeat_pass}
                submit={(e) => this.handleSubmit(e)}
                reset={(e) => this.handleReset(e)}
                fieldChange={(e) => this.handleFieldChange(e)}
            />
        )
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.id ===null || "" === this.state.id)
            this.newUsersEvent();
        else
            this.updateUserEvent();
    }

    newUsersEvent = () => {
        if (this.state.pass.valueOf() === this.state.repeat_pass.valueOf()) {
            Api.push("users", {
                email: this.state.email,
                city: this.state.city,
                id: 0,
                name: this.state.name,
                password: this.state.pass,
                surname: this.state.surname
            });
            this.handleReset();
            alert("Zarejestrowano");
            this.props.history.push("/login/");
        } else {
            alert("Write dow corect values");
        }
    }

    updateUserEvent = () => {
        Api.push("users", {
            email: this.state.email,
            city: this.state.city,
            id: this.state.id,
            name: this.state.name,
            surname: this.state.surname
        });
        this.changePasswordEvent();
        this.setNewWalues();
        alert("Your prifile was updated");
    }

    changePasswordEvent = () => {
        let passChange = "" !== this.state.pass.valueOf() &&
            "" !== this.state.repeat_pass.valueOf() &&
            "" !== this.state.repeat_pass.valueOf();
        if (!passChange) return;
        let passThisSame = this.state.pass.valueOf() === this.state.repeat_pass.valueOf();
        if (passThisSame) {
            Api.push("users/pu/", {
                id: this.state.id,
                oldPassword: this.state.oldpass,
                password: this.state.pass,
            })
            this.setState({
                pass: "", oldpass: "",
                repeat_pass: ""
            });
            alert("Your profile was updated");
        } else {
            alert("New passwords are not this same");
        }
    }


    setNewWalues = () => {
        localStorage.setItem('u_id', this.state.id);
        localStorage.setItem('u_name', this.state.name);
        localStorage.setItem('u_surname', this.state.surname);
        localStorage.setItem('u_email', this.state.email);
        localStorage.setItem('u_city', this.state.city);
    }

    handleReset = () => {
        this.setState({
            id: "",
            city: "",
            email: "",
            name: "",
            surname: "",
        });
    };

    handleFieldChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
}

export default Profile;