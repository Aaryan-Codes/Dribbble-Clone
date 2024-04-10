import { Link } from "react-router-dom";
import UploadWidget from "./UploadWidget";
import { useState } from "react";


const CreateProfile = () => {

    const [isLocationFilled, setLocationFilled] = useState(false);

    const handleLocationChange = (e) => {
        const location = e.target.value;
        setLocationFilled(location.trim() !== "");
        
      };
      const isNextEnabled = isLocationFilled;

  return (
    <div className="create-page">
      <div className="logo">dribbble</div>
      <div className="create-wrapper">
        <div className="profile-build">
          <div className="header">
            <h1 className="heading">Welcome! Let's create your profile</h1>
            <h2 className="sub-heading">
              Let others get to know you better! You can do these later
            </h2>
          </div>
          <div className="add-avatar">
            <p>Add an avatar</p>
            <div className="upload-image">
              <UploadWidget />
            </div>
          </div>
          <div className="location">
            <p>Add your location</p>
            <input type="text" placeholder="Enter a location" onChange={handleLocationChange} />
          </div>
          <div className={`next-btn ${isNextEnabled ? "enabled" : "disabled"}`}>
            <Link to="/profile-type">
            <button type="button" disabled={!isNextEnabled} >Next</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProfile;
