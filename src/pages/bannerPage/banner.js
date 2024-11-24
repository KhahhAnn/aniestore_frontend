import React from 'react'
import video from '../../assets/video_demo.mp4'
import logo from "../../logoAnie.png"
import "./banner.css"

const BannerPage = () => {
   return (
      <div>
         <video id="video-background" autoPlay={true} loop={true} muted playsInline>
            <source src={video} type="video/mp4" />
         </video>
         <div className="center">
            <a href="home"><button className="center-button">Mua ngay</button></a>
         </div>
         <div className="sidebar">
            <ul className="menu">
               <li>
                  <img src={logo} alt="" />
               </li>
               <li><a href="home">Trang chủ</a></li>
               <li><a href="shop">Cửa hàng</a></li>
               <li><a href="about">Giới thiệu</a></li>
               <li><a href="contact-us">Liên hệ</a></li>
            </ul>
         </div>
         <div className="sidebar-right">
            <ul>
               <li><a href="sign.html"><i className="fas fa-user"></i></a></li>
               <li id="search-li"><i className="fas fa-search"></i></li>
            </ul>
         </div>
      </div>
   )
}

export default BannerPage;