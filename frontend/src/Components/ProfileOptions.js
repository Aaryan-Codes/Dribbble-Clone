import { useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const ProfileOptions = () => {
  const [checkedTypes, setCheckedTypes] = useState([]);

  const handleCheckbox = (type) => {
    if (checkedTypes.includes(type)) {
      setCheckedTypes(checkedTypes.filter((item) => item !== type));
    } else {
      setCheckedTypes([...checkedTypes, type]);
    }
  };

  return (
    <div className="main-wrapper">
      <div className="logo">dribbble</div>
      <div className="types-wrapper">
        <div className="header">
          <h1 className="text-[40px] font-bold">
            What brings you to Dribbble?
          </h1>
          <p className="text-lg text-[#727272] mt-[5px]">
            Select the options that describe you. Don't worry, you can explore
            other options later.
          </p>
        </div>
        <div className="types">
          <div
            className={`type ${
              checkedTypes.includes("designer") ? "selected" : ""
            }`}
            onClick={() => handleCheckbox("designer")}
          >
            <img
              src="https://res.cloudinary.com/dsrretw1s/image/upload/v1712514098/dylfxw4mpt6vvovaf7ht.png"
              alt=""
            />
            <p>I'm a designer looking to share my work</p>
            <p className="description" style={{display : `${
                    checkedTypes.includes("designer") ? "block" : "none"
                  }`}}>
                    Ready to showcase your talent? Dribbble is your stage to shine among millions of fellow creatives.
                  </p>
            <div className="check-box">
              <div
                className="status"
                style={{
                  display: `${
                    checkedTypes.includes("designer") ? "block" : "none"
                  }`,
                }}
              >
                <BsCheckCircleFill className="check-circle" />
              </div>
            </div>
          </div>
          <div
            className={`type ${
              checkedTypes.includes("hire") ? "selected" : ""
            }`}
            onClick={() => handleCheckbox("hire")}
          >
            <img
              src="https://res.cloudinary.com/dsrretw1s/image/upload/v1712514259/y2axggiwbxmnkzrno9ti.png"
              alt=""
            />
            <p>I'm looking to hire a designer</p>
            <p className="description" style={{display : `${
                    checkedTypes.includes("hire") ? "block" : "none"
                  }`}}>
                    Need design expertise? Dribbble connects you with top-tier talent for your projects.
                  </p>
            <div className="check-box">
              <div
                className="status"
                style={{
                  display: `${
                    checkedTypes.includes("hire") ? "block" : "none"
                  }`,
                }}
              >
                <BsCheckCircleFill className="check-circle" />
              </div>
            </div>
          </div>
          <div
            className={`type ${
              checkedTypes.includes("inspiration") ? "selected" : ""
            }`}
            onClick={() => handleCheckbox("inspiration")}
          >
            <img
              src="https://res.cloudinary.com/dsrretw1s/image/upload/v1712514342/kxytrwlnpadav2yakbs4.png"
              alt=""
            />
            <p>I'm looking for design inspiration</p>
            <p className="description" style={{display : `${
                    checkedTypes.includes("inspiration") ? "block" : "none"
                  }`}}>
                    With over 7 million shots from a vast community of designers, Dribbble is the leading source design inspiration.
                  </p>
            <div className="check-box">
              <div
                className="status"
                style={{
                  display: `${
                    checkedTypes.includes("inspiration") ? "block" : "none"
                  }`,
                }}
              >
                <BsCheckCircleFill className="check-circle" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <p id="multiple-msg" className="text-xl font-semibold mx-0 my-5">
            Anything else? You can select multiple
          </p>
        </div>
        <div>
          <Link to="/user-profile" >
          <button
            style={{
              backgroundColor: "#ff2692",
              padding: "10px 90px",
              color: "white",
              borderRadius: "10px",
            }}
          >
            Finish
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileOptions;
