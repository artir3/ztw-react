import React, {Component} from 'react';
import UsersApi from '../../api/ApiImpl';

const Api = UsersApi;

class Restaurant extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            description: "",
            menu: "",
            name: "",
            localization_id: 0,
            categories: [],
            employees: [],
            tables: []
        }


        render(){
            return (
                <ProfileForm
                    id={this.state.id}
                    description={this.state.description}
                    menu={this.state.menu}
                    name={this.state.name}
                    localization={this.state.localization_id}
                    cat={this.state.categories}
                    employ={this.state.employees}
                    tables={this.state.tables}
                    submit={(e) => this.handleSubmit(e)}
                    reset={(e) => this.handleReset(e)}
                    fieldChange={(e) => this.handleFieldChange(e)}
                />
            )
        }

        handleSubmit = (event) => {
            // event.preventDefault();
            // if (this.state.id === null || "" === this.state.id)
            //     this.newUsersEvent();
            // else
            //     this.updateUserEvent();
        }

        // newUsersEvent = () => {
        //     if (this.state.pass.valueOf() === this.state.repeat_pass.valueOf()) {
        //         Api.push("users", {
        //             email: this.state.email,
        //             city: this.state.city,
        //             id: 0,
        //             name: this.state.name,
        //             password: this.state.pass,
        //             surname: this.state.surname
        //         });
        //         this.handleReset();
        //         alert("Zarejestrowano");
        //         this.props.history.push("/login/");
        //     } else {
        //         alert("Write dow corect values");
        //     }
        // }

        handleReset = () => {
            this.setState({
                // id: "",
                // city: "",
                // email: "",
                // name: "",
                // surname: "",
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
    export default Restaurant;