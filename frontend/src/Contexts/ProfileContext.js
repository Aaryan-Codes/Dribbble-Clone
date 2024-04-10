import { createContext, useContext, useState } from "react";

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [selectedImage, setImageLink] = useState();
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const [Sendemail, setSendEmail] = useState();

  return (
    <ProfileContext.Provider
      value={{
        selectedImage,
        setImageLink,
        formData,
        setFormData,
        Sendemail,
        setSendEmail,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfileContext = () => useContext(ProfileContext);
