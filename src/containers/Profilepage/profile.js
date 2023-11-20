import React from "react";
import Navbar from "../../components/navbar/navbar";
import Banner from "../../components/banner/banner";
import Posts from "../../components/posts/posts";
function ProfilePage(){
    return (
        <div>
            <Navbar/>
            <div>
                <Banner/>
                <br/>
                <Posts/>
            </div>
        </div>
    );
}

export default ProfilePage;