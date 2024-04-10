import { useProfileContext } from "../Contexts/ProfileContext";
import { CgSearch } from "react-icons/cg";
import { TbBriefcaseOff } from "react-icons/tb";
import { MdClose } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { MdMarkEmailRead } from "react-icons/md";
import { AiOutlineCopyright,AiFillFacebook  } from "react-icons/ai";
import { PiDribbbleLogoDuotone } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoInstagram } from "react-icons/bi";
import { BsPinterest } from "react-icons/bs";

const UserProfile = () => {
  const { selectedImage,Sendemail } = useProfileContext();
  const [showMenu,setShowMenu] = useState(false);


  const handleSidebar = () =>{
    setShowMenu(!showMenu);
  } 

  return (
    <div className="profile-wrapper">
      <header className="header">
        <button className="tiles-btn " onClick={handleSidebar}>
        <RxHamburgerMenu />
        </button>
        <div className="left-side">
          <span>Inspiration</span>
          <span>Find Work</span>
          <span>Learn Design</span>
          <span>Go Pro</span>
          <span>Hire Designers</span>
        </div>
        <div className="logo">dribbble</div>
        <div className="right-side">
          <div className="search-box">
            <input type="text" placeholder="Search" />
            <button>
              <CgSearch />
            </button>
          </div>
          <span className="briefcase-icon">
            <TbBriefcaseOff />
          </span>
          <img
            className="profile-picture"
            src={selectedImage ? selectedImage : ""}
          />
          {/* <img
            className="profile-picture"
            src='https://res.cloudinary.com/dsrretw1s/image/upload/v1712655492/gneyquqs4jogvpr19jqa.jpg'
          /> */}
          <button className="upload-btn">Upload</button>
        </div>
        <div className="hamburger-menu" style={{display:showMenu ? 'flex' : 'none'}}>
        <button className="close-menu-btn" onClick={handleSidebar}><MdClose /></button>
          <div className="search-box">
            <input type="text" placeholder="Search" />
            <button>
              <CgSearch />
            </button>
          </div>
          <button className="upload-btn">Upload</button>
          <span>Inspiration</span>
          <span>Find Work</span>
          <span>Learn Design</span>
          <span>Go Pro</span>
          <span>Hire Designers</span>
        </div>
      </header>
      <section className="profile-body">
          <h1 className="text-[40px] font-bold">Please verify your email...</h1>
          <div>
          <MdMarkEmailRead style={{fontSize:"90px"}} />
          </div>
          <div className="msg-body">
          <p>Please verify your email address. We've sent a confirmation email to:</p>
          <p style={{color:"black"}}><b>{Sendemail}</b></p>
          <p>Click the confirmation link in that email to begin using Dribbble.</p>
          <p>Didn't receive the email? Check your Spam folder, it may have been caught by a filter.
            If you still don't see it, you can <span style={{color:"#fe2491"}}>resend the confirmation email</span></p>
          <p>Wrong email address?<span style={{color:"#fe2491"}}> Change it.</span></p>
          </div>
      </section>
      <footer>
        <div className="flex justify-between">
          <div className="socials">
            <div className="logo">
                dribbble
                </div>
                <p>Dribbble is the world's leading community for creatives to share,grow,and get hired.</p>
                <div className="app-icons">
                    <span><PiDribbbleLogoDuotone/></span>
                    <span>
                    <FaXTwitter />
                    </span>
                    <span>
                    <AiFillFacebook />
                    </span>
                    <span>
                    <BiLogoInstagram />
                    </span>
                    <span>
                    <BsPinterest />
                    </span>
                </div>
            
          </div>
          <div className="other-links">
          <div className="misc">
            <p><b>For designers</b></p>
            <p>Go Pro!</p>
            <p>Explore design work</p>
            <p>Design blog</p>
            <p>Overtime podcast</p>
            <p>Playoffs</p>
            <p>Weekly Warm-Up</p>
            <p>Refer a Friend</p>
            <p>Code of conduct</p>
          </div>  
          <div className="misc">
            <p><b>Company</b></p>
            <p>About</p>
            <p>Careers</p>
            <p>Support</p>
            <p>Media kit</p>
            <p>Testimonials</p>
            <p>API</p>
            <p>Terms of service</p>
            <p>Privacy policy</p>
            <p>Cookie policy</p>
          </div>
          <div className="misc">
            <p><b>Directories</b></p>
            <p>Design jobs</p>
            <p>Designers for hire</p>
            <p>Freelance designers for hire</p>
            <p>Tags</p>
            <p>Places</p>
            <p>API</p>
            <p>Terms of service</p>
            <p>Privacy policy</p>
            <p>Cookie policy</p>
          </div>
          <div className="misc">
            <p><b>Design Resource</b></p>
            <p>Freelancing</p>
            <p>Design Hiring</p>
            <p>Design Portfolio</p>
            <p>Design Education</p>
            <p>Creative Process</p>
            <p>Design Industry Trends</p>
          </div>
          <div className="misc">
            <p><b>Design assets</b></p>
            <p>Dribbble Marketplace</p>
            <p>Creative Market</p>
            <p>Fontspring</p>
            <p>Font Squirrel</p>
          </div>
          <div className="misc">
            <p><b>Hire designers</b></p>
            <p>Post a job opening</p>
            <p>Post a freelance</p>
            <p>Search for designers</p>
            <p><b>Brands</b></p>
          <p>Advertise with us</p>
          </div>
          </div>
        </div>
        <div className="flex justify-between border-t-[#e0e0e0] border-t border-solid">
            <p className="flex items-center gap-[5px]"><AiOutlineCopyright /> 2023 Dribbble. All rights reserved.</p>
            <p className="flex items-center gap-[5px]"><b>20,501,853</b> shots dribbbled <PiDribbbleLogoDuotone  style={{color:"#fc2f95",fontSize:"20px"}} /></p>
        </div>
      </footer>
    </div>
  );
};

export default UserProfile;
