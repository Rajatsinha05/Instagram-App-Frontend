import React, { useRef } from 'react';
import Navbar from '../Components/Navbar';
import axios from 'axios';
function Signup() {

    const title = useRef();
    const device = useRef();
    const content = useRef();

    function handleSubmit(e){
        e.preventDefault();

        let userDetails = {
            title:title.current.value,
            body:content.current.value,
            device:device.current.value
        }

        // console.log("about to send");

        // axios.post('https://http://localhost:8081/users/register' , userDetails)
        // .then((res)=>{
        //     alert("data sent to backend");
        // }).catch((err)=>{
        //     console.log("error occured");
        //     console.log(err);
        // })


    }


    return (
        <>
        <Navbar />
            <div className="outer_signup_div">
                    <div className="inner_signup_div">
                            <form onSubmit={handleSubmit}>
                                <h1>Create New Post</h1>
                                <input type="text"  placeholder='Title' ref={title} required/>
                                
                                
                                <select ref={device}>
                                    <option value="Mobile"> Mobile </option>
                                    <option value="PC"> Female </option>
                                    <option value="Tablet">Tablet</option>
                                </select>

                                    <br />
                                <textarea ref={content} cols="55" rows="10"></textarea>
                              

                                <input type="submit" value="Post" />
                            </form>
                    </div>
            </div>
        </>
    );
}

export default Signup;