import React from 'react';
import "./Feed.css"
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from './StoryReel';

function Feed() {
    return (
        <div className='feed'>
            <StoryReel />
            <MessageSender />

            <Post
                profilePic="https://github.com/InushaManawadu.png"
                message="ThumbsUp"
                timestamp="This is a timestamp"
                username="Inusha Manawadu"
                image="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" 
            />
                    
            <Post
                profilePic="https://github.com/InushaManawadu.png"
                message=""
                timestamp="This is a timestamp"
                username="asasasas"
            />
        </div>
    )
}

export default Feed
