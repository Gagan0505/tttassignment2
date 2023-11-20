import React, { useState, useEffect } from "react";
import './posts.css';
import user from '../../userdata.json';
import PostCard from "../postCard/post_card";
export default function Posts(){
    const [postData, setPostData] = useState(null);
    useEffect(() =>{
        const fetchData = async () => {
            try {
                setPostData(user.posts);
            }catch(error) {
                console.error('Error in Fetching Data', error);
            }
        };
        fetchData();
    }, []);
    if(!postData) {
        return <div>Loading...</div>
    }
    return (
        <div>
            <button className="tab-btn">134 Posts</button>
            <div className="post-container">
                {postData.map((post) => (
                    <div key={post.postId}>
                        <PostCard title={post.title} content={post.content} day={post.date} readtime={post.readTime} views={post.views} />
                        <div className="line-bl"></div>
                    </div>
                )
                )}
            </div>
        </div>
    );
}