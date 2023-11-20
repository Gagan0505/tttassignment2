import { RecommendRounded } from "@mui/icons-material";
import React from "react";
import './post_card.css';

export default function PostCard({ title, content, day, readtime, views }) {
    console.log(title);
    return (
        <div className="post-container">
            <div className="post_title">
                <h3>{title}</h3>
                <RecommendRounded color="secondary" />
            </div>
            <p>{content}</p>
            <div className="post-footer">
               <div><span>thoughts</span> by anujgosalia</div> 
                <p>{day} - {readtime} - {views} Views</p>
            </div>
        </div>
    );
}
