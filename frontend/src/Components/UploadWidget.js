import { useEffect, useRef, useState } from "react";
import { useProfileContext } from "../Contexts/ProfileContext";
import { FaGreaterThan } from "react-icons/fa6";

const UploadWidget = () => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  const { selectedImage, setImageLink } = useProfileContext();
  const [isOptionsVisible,setOptionsVisible] = useState(false);
  const [selectedOptionColor,setSelectedOptionColor] = useState();

  const OptionsToggle = (e) =>{
    setOptionsVisible(!isOptionsVisible);
  }

  const handleSelection = (e) =>{
    const optionColor = e.target.style.background;
    setSelectedOptionColor(optionColor);
  }

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    console.log(cloudinaryRef.current);
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dsrretw1s",
        uploadPreset: "oxh9pnv8",
      },
      function (error, result) {
        if (!error && result && result.event === "success") {
          console.log(result);
          const imgLink = result.info.secure_url;
          setImageLink(imgLink);
        }
      }
    );
  }, [selectedImage]);

  return (
    <div className="upload-widget">
      <div className="image-preview">
        
        <img
          className="profile-img"
          src={ selectedImage ? selectedImage : ""}
          style={{background : selectedOptionColor,objectFit:"cover"}}
        />
      </div>
      <div className="upload-buttons">
        <button
          className="choose-img-btn"
          onClick={() => widgetRef.current.open()}
        >
          Choose image
        </button>
        <div className="default-avatar-btn">
          <p>
            <span className="toggle-icon" onClick={OptionsToggle}>
              <FaGreaterThan style={{
                  transform: isOptionsVisible ? "rotate(90deg)" : "none",
                  transition: "transform 0.3s ease",
                  cursor:"pointer"
                }} />
            </span>{" "}
            Or choose one of our defaults{" "}
          </p>
          <div className={`default-options ${isOptionsVisible ? 'visible' : ""}`} onClick={handleSelection}>
            <span className="options" data-id="1" style={{background: "linear-gradient(to bottom right,red,blue)"}}></span>
            <span className="options" data-id="2" style={{background: "linear-gradient(to bottom right,cyan,grey)"}}></span>
            <span className="options" data-id="3" style={{background: "linear-gradient(to right, #ffffff 0%, #ff0066 100%)"}}></span>
            <span className="options" data-id="4" style={{background: "linear-gradient(to bottom right,violet,cyan)"}}></span>
            <span className="options" data-id="5" style={{background: "linear-gradient(to bottom right, #3399ff 0%, #ffff00 100%)"}}></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadWidget;
