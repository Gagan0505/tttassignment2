import React, { useEffect, useState } from "react";
import bannerImage from "../../images/banner.jpg";
import profile from "../../images/profile.jpg";
import Buttons from "../buttons/buttons";
import "./banner.css";
import IconBox from "../icons/iconBox";
import StarsIcon from '@mui/icons-material/Stars';
import RecommendIcon from '@mui/icons-material/Recommend';
import { FavoriteOutlined, RemoveRedEyeOutlined } from "@mui/icons-material";
import user from '../../userdata.json';

export default function Banner(){
    const [userData, setUserData] = useState(null);

    useEffect(() =>{
        const fetchData = async () => {
            try {
                setUserData(user);
            }catch(error) {
                console.error('Error in Fetching Data', error);
            }
        };
        fetchData();
    }, []);
    if(!userData) {
        return <div>Loading...</div>
    }
    return (
        <div>
            <div className="imgDiv">
                <img className="banner-img" src={bannerImage} alt="bg"/>
            </div>
            <div className="profile-container">
                <div className="profile-section">
                    <img src={profile} alt="profile"/>
                     <div className="details-sec">
                    <h3>{userData.user.name}</h3>
                    <div className="btn">
                        <Buttons Count={userData.user.followers} title="Followers"/>
                        <Buttons Count={userData.user.following} title="Following"/>                      
                    </div>
                     </div>

                 </div>
                <div>
                    <p>{userData.user.bio}</p>
                    <a href="www.instagram.com">http://www.instagram.com/anujgosalia</a>
                    <div className="icon-div">
                        <IconBox icon={StarsIcon} number={123} iconColor='secondary'/>
                        <IconBox icon={RecommendIcon} number={12} iconColor='success'/>
                        <IconBox icon={RemoveRedEyeOutlined} number={'57.8K'} iconColor='disabled'/>
                        <IconBox icon={FavoriteOutlined} number={'26.0K'} iconColor='success'/>
                    </div>
                </div>
            </div>
            
        </div>
    );

}