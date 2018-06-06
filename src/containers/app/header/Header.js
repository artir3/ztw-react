import React from 'react'
import {
    Button,
    Col,
    Collapse,
    Form,
    FormGroup,
    Input,
    Label,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Nav,
    Navbar,
    NavbarBrand,
    NavItem,
    NavLink
} from "reactstrap";


const Header = (props) => (
    <header>
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Main</NavbarBrand>
            <Collapse isOpen={false} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="/contact/">Contact</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/profile/">Profile</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/restaurant/">Restaurant {props.isLogged.toString()}</NavLink>
                    </NavItem>
                    <NavItem>
                        <Button onClick={props.toggleLoggingModal}>{props.isLogged ? "Log out" : "Log in"}</Button>
                        <Modal isOpen={props.isLoggedModal} toggle={props.toggleLoggingModal}>
                            <ModalHeader
                                toggle={props.toggleLoggingModal}>{props.isLogged ? "Log out window" : "Log in window"}</ModalHeader>
                            <Form>
                                <ModalBody>
                                    <FormGroup row>
                                        <Label for="email" sm={2}>Email</Label>
                                        <Col sm={10}>
                                            <Input  type="email" name="email" id="email" placeholder="Write your email"/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="password" sm={2}>Password</Label>
                                        <Col sm={10}>
                                            <Input type="password" name="password" id="password"
                                                   placeholder="Write your password"/>
                                        </Col>
                                    </FormGroup>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="primary" onClick={props.logInMe}>Log in</Button>{' '}
                                    <Button color="secondary" onClick={props.toggleLoggingModal}>Cancel</Button>
                                </ModalFooter>
                            </Form>
                        </Modal>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>

    </header>
)

export default Header;