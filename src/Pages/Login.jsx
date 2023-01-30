import React, { useRef } from 'react';
import Navbar from '../Components/Navbar';
import axios from 'axios';
function Signup() {

    const email = useRef();
    const password = useRef();

    function handleSubmit(e){
        e.preventDefault();

        let userDetails = {
            email:email.current.value,
            password: password.current.value
        }


        // 

        //  login server code here....
        


        // 
    }


    return (
        <>
        <Navbar />
            <div className="outer_signup_div">
                    <div className="inner_signup_div">
                            <form onSubmit={handleSubmit}>
                                <h1>Fill Your Details</h1>
                                <input type="email"  placeholder='Email' ref={email} required/>
                                
                               

                                <input type="password" ref={password} required placeholder='Enter Password'/>

                                <input type="submit" value="Register" />
                            </form>
                    </div>
            </div>
        </>
    );
}

export default Signup;