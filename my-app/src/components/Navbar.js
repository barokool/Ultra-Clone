import React from 'react'
import { Nav, Heading, Link, ButtonNav } from './Navbar/Navbar.element'

const Navbar = () => {
    return (
        <div>
            <Nav>
                <div>
                    <Heading>ULTRA</Heading>
                </div>
                <div>
                    <Link>Home</Link>
                    <Link>Services</Link>
                    <Link>Products</Link>
                    <ButtonNav>Sign up</ButtonNav>
                </div>
            </Nav>
        </div>
    )
}

export default Navbar
