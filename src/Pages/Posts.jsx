import React from 'react';
import Navbar from '../Components/Navbar';
function Home() {
    return (
        <>
            <Navbar />

            <div className="outer_home">
                    <h3>
                        Total Post = 15
                    </h3>

                    <div className="outer_post_div">
                    
                            <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, cupiditate?</p> 
                            <div className='buttons_div'>
                                <button>📝</button>
                                <button>❌</button>
                            </div>
                            </div>
                            
                    </div>
            </div>
        </>
    );
}

export default Home;