import React from 'react'
import { Nav, Heading, Link, Button } from './Navbar/Navbar.element'

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
                    <Button>Sign up</Button>
                </div>
            </Nav>
        </div>
    )
}

export default Navbar
