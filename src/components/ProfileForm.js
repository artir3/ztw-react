import React from 'react';
import '../containers/profile/Profile.css';

const profileForm = (props) => {
    return (
        <div className="Profile">
            <form onSubmit={props.submit} onReset={props.reset}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={props.name}
                           onChange={props.fieldChange}/>
                </div>
                <div>
                    <label>Surname:</label>
                    <input type="text" name="surname" value={props.surname}
                           onChange={props.fieldChange}/>
                </div>
                {
                    props.id != null ?
                        <div>
                            <label>Old password:</label>
                            <input type="password" name="oldpass" value={props.oldpass}
                                   onChange={props.fieldChange}/>
                        </div>
                     : null
                }
                <div>
                    <label>{props.id == null ?'Password:':'New password'}</label>
                    <input type="password" name="pass" value={props.pass}
                           onChange={props.fieldChange}/>
                </div>
                <div>
                    <label>{props.id == null ?'Repeat password:':'Repeat new password'}</label>
                    <input type="password" name="repeat_pass" value={props.repeat_pass}
                           onChange={props.fieldChange}/>
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={props.email}
                           onChange={props.fieldChange}/>
                </div>
                <div>
                    <label>City:</label>
                    <input type="text" name="city" value={props.city}
                           onChange={props.fieldChange}/>
                </div>
                <div>
                    <input type="submit" value={props.id == null? 'Register':'Update'}/>
                    <input type="reset" value="Cancel"/>
                </div>
            </form>
        </div>
    )
};

export default profileForm;