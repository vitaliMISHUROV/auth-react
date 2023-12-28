import { Link } from "react-router-dom";
import React from "react";

const Header =() =>{
    return(
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>home</Link>
                    </li>
                    <li>
                        <Link to='/home'>homepage</Link>
                    </li>
                    <li>
                        <Link to='/users'>users</Link>
                    </li>
                    <li>
                        <Link to='/post'>posts</Link>
                    </li>
                    <li>
                        <Link to='/cropper'>copper</Link>
                    </li>
                    <li>
                        <Link to='/populat'>copper</Link>
                    </li>   
                </ul>
            </nav>
    
        </header>
    
    ); 
}
export default Header;

