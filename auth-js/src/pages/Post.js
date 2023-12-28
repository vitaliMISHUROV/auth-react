import React from 'react';

import PostLoader from '../components/PostLoader';
import { useClicker } from '../hooks';
const  Post = () => {
  const click = useClicker();
 
        return (
            <div>
                <h1>
                  Post
                </h1>
                <p>click{click}</p>
                <PostLoader/>
                
            </div>
        );
    
}

export default Post;
