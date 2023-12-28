import React from 'react';
import { useClicker } from '../hooks';
const Home = () => {
    const click =useClicker();
    return (
        
        <div>
            <h1>HOME</h1>
            <p>click:{click}</p>
        </div>
    );
}

export default Home;
