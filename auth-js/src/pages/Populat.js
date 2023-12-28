import React from 'react';




import { useClicker } from '../hooks';
import Population from '../components/Population';
const  Populat = () => {
  const click = useClicker();
 
        return (
            <div>
                <h1>
                Population
                </h1>
                <p>click{click}</p>
               <Population/>
                
            </div>
        );
    
}

export default Populat;
