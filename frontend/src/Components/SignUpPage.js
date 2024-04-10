import React, { useEffect, useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useProfileContext } from "../Contexts/ProfileContext";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const { formData, setFormData,setSendEmail } = useProfileContext();
  const navigate = useNavigate();
  // State variables to store form validation errors
  const [errors, setErrors] = useState({});

  // Calling server on mount to decrease the handleSubmit response time
  useEffect(()=>{
    fetch('https://dribbble-clone-otoh.onrender.com/api/info')
    .then(res=>res.json())
    .then(data=>console.log(data))
  },[]);

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to toggle password visibility
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Function to validate form inputs
  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    if (!formData.username.trim()) {
      errors.username = "Username is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Invalid email address";
    }
    if (formData.password.length < 6) {
      errors.password = "Password should be 6+ characters";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      // Proceed with form submission
      console.log("Form submitted:", formData);
      // window.location.href = "/create-profile";
      try {
        const response = await fetch(`https://dribbble-clone-otoh.onrender.com/api/info/signup`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setSendEmail(formData.email)
          setFormData({
            name: "",
            username: "",
            email: "",
            password: "",
          });
          navigate("/create-profile");
        }else{
          const errorData = await response.json();
          alert(errorData.msg);
        }

      } catch (error) {
        console.error("fromRegister", error);
      }
      
    }
  };

  return (
    <div className="login-wrapper">
      <div className="left-part">
        <div className="logo">dribbble</div>
        <div className="heading">
          Discover the world's top Designer & Creatives.
        </div>
      </div>
      <div className="right-part">
        <div className="sign-in-option"></div>
        <div className="form-wrapper">
          <form className="sign-up-from" onSubmit={handleSubmit}>
            <div className="header">
              <h1 className="signup-heading">Sign up to Dribbble</h1>
              {Object.keys(errors).length > 0 && (
                <div className="error-list">
                  <ul>
                    {Object.values(errors).map((error, index) => (
                      <li key={index}>{error}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="name-username">
              <div className="detail-wrapper">
                <span>Name</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter Name"
                />
              </div>
              <div className="detail-wrapper">
                <span>Username</span>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  placeholder="Enter Username"
                />
              </div>
            </div>
            <div className="credentials">
              <div className="detail-wrapper">
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                />
              </div>
              <div className="detail-wrapper password">
                <span>Password</span>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="6+ characters"
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <BsEye /> : <BsEyeSlash />}
                </button>
              </div>
            </div>
            <div className="agreement">
              <input type="checkbox" style={{cursor:"pointer"}} />
              <p>
                Creating an account means you're okay with our<span className="text-[#4d004d] cursor-pointer"> Terms of Service,
                Privacy Policy</span>, and our default <span className="text-[#4d004d] cursor-pointer">Notification Settings.</span>
              </p>
            </div>

            <button type="submit" className="signup-button">
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
