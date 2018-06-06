import React from 'react';
import {Jumbotron} from "reactstrap";

const contact = () => {
    return (
        <div>
            <Jumbotron>
                <h3 className="display-4">Contact</h3>
                <hr className="my-2"/>
                <p className="lead">You can contact with as by:</p>
                <p><label>Email: </label>markowski.artur@outlook.com</p>
                <p><label>Phone: </label>793940811</p>
                <p><label>Post: </label>Top secret :), 50-310 Wroclaw Poland</p>
            </Jumbotron>
        </div>
    )
}

export default contact;