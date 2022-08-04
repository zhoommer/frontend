import React from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from "reactstrap";
// import { Link } from "react-router-dom";



export default class Navi extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div class="border border-2 rounded navbar bg-dark">
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand href="/">KITAP KOKUSU</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="me-auto" navbar>
                            <NavItem>
                                <NavLink>
                                    Anasayfa
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink>
                                   Hakkimizda
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}