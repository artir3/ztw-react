import React from 'react'
import {
    Button,
    Collapse,
    Form,
    Modal,
    ModalFooter,
    ModalHeader,
    Nav,
    Navbar,
    NavbarBrand,
    NavItem,
    NavLink
} from "reactstrap";
import {Auth} from '../App';


const Header = (props) => {
    return (
        <header>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Main</NavbarBrand>
                <Collapse isOpen={false} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/contact/">Contact</NavLink>
                        </NavItem>
                        <Auth.Consumer>
                            {
                                auth => auth ?
                                    <NavItem>
                                        <NavLink href="/profile/">Profile</NavLink>
                                    </NavItem>
                                    : null
                            }
                        </Auth.Consumer>
                        <Auth.Consumer>
                            {
                                auth => auth ?
                                    <NavItem>
                                        {/*<NavLink href="/addRestaurant/">Profile</NavLink>*/}
                                    </NavItem>
                                    : null
                            }
                        </Auth.Consumer>
                        <Auth.Consumer>
                            {
                                auth => !auth ?
                                    <NavItem>
                                        <NavLink href="/register/">Register</NavLink>
                                    </NavItem>
                                    : null
                            }
                        </Auth.Consumer>
                        <NavItem>
                            <Auth.Consumer>
                                {
                                    auth => auth ?
                                        <div>
                                            <Button
                                                onClick={props.toggleLoggingModal}>Log out</Button>
                                            <Modal isOpen={props.showsModal} toggle={props.toggleLoggingModal}>
                                                <ModalHeader
                                                    toggle={props.toggleLoggingModal}>Do you want log out?</ModalHeader>
                                                <Form>
                                                    <ModalFooter>
                                                        <Button color="primary" onClick={props.logOut}>Log
                                                            out</Button>{' '}
                                                        <Button color="secondary"
                                                                onClick={props.toggleLoggingModal}>Cancel</Button>
                                                    </ModalFooter>
                                                </Form>
                                            </Modal>
                                        </div>
                                        : <NavLink href="/login/">Log in</NavLink>
                                }
                            </Auth.Consumer>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </header>
    )
}

export default Header;