import React from 'react';
import { NavLink } from 'react-router-dom';
function Navbar(props) {

    

    let authState = JSON.parse(localStorage.getItem("login"))  || false;

    function handleLogout(){
        localStorage.setItem("login" , false);
    }
    
    console.log(authState);
    return (
        <>
            <nav className='outer_navbar'>
                <div><h1><NavLink to='/'>Instagram</NavLink></h1></div>

                <div>
                    <ul>
                        {
                            !authState ? <>
                            <li>
                            <NavLink to='/post'>Posts</NavLink>
                            </li>
                            <li>
                            <NavLink to='/login'>Login</NavLink>
                        </li>
                        <li>
                            <NavLink to='/signup'>Signup</NavLink>
                        </li>
                            </> : <button onClick={handleLogout}>Logout</button>
                        }
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;