import React from 'react';
import UserLoader from '../components/UserLoader';
import { useClicker } from '../hooks';

const  Users = () => {
  const click = useClicker();
 
        return (
            <div>
                <h1>
                  Users
                </h1>
                <p>click:{click}</p>
                <UserLoader/>
            </div>
        );
    
}

export default Users;
