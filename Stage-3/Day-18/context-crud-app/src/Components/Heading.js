import React from 'react'
import {Link} from "react-router-dom"
import {Navbar,Nav,NavItem,NavbarBrand,Container} from "reactstrap"
export const Heading = () => {
    return (
        <Navbar color='dark'>
            <Container className='d-flex justify-content-between '>
                <NavbarBrand href='/'><strong>My Items</strong></NavbarBrand>
                <Nav>
                    <NavItem>
                        <Link className='btn btn-primary' to="/addUser">AddUser</Link></NavItem>
                    
                </Nav>
            </Container>
        </Navbar>
    )
}
