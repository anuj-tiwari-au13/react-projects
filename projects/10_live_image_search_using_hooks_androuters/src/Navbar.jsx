import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {

    return(
        <>
        <div className="topnav">
        <NavLink exact activeClassName="active" to='/' > Home</NavLink>
        <NavLink exact activeClassName="active_class" to='/about' > About</NavLink>
        <NavLink exact activeClassName="active_class" to='/contact' > Contact</NavLink>
        
        {/* using Navlink enables us to write active class name, for the css to be performed. */}
        {/* here Link elwmwnt can also be used, but it does not allow  to add additional class attribute, sso adding css becomes tough */}
        </div>
        </>
    );

}


export default Navbar ;