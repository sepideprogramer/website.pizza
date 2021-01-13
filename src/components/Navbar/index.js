import React from 'react'
import {Nav,NavLink,NavIcon,Bars} from './NavbarElement'
 const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavLink to="/"> پیتزا</NavLink>
                <NavIcon onClick={toggle}>
                    <p> لیست</p>
                    <Bars/>
                </NavIcon>
                </Nav>
        </>
    )
}
export default Navbar;
