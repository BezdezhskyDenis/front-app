import { createContext, useContext, useState } from "react";

const fn_error_context_must_be_used = () => {
  throw new Error("must use userContext provider for consumer to work");
};

export const userContext = createContext({
  signUpVisible: null,
  loginVisible: null,
  userConnectionVisible: null,
  handleSignUpChange: fn_error_context_must_be_used,
  handleLoginChange: fn_error_context_must_be_used,
  handleSignSwitch: fn_error_context_must_be_used,
});
userContext.displayName = "user";


export function UserProvider({ children }) {
  const [signUpVisible, setSignUpVisible] = useState(false); 
  
  const [loginVisible, setLoginVisible] = useState(false);

  const [userConnectionVisible, setUserConnection] = useState(false);
  
  const handleSignUpChange = () => {
    setUserConnection(!userConnectionVisible)
    setSignUpVisible(!signUpVisible)
  }

  const handleLoginChange = () => {
    setUserConnection(!userConnectionVisible)
    setLoginVisible(!loginVisible)
  }
  
  const handleSignSwitch = () => {
    setLoginVisible(!loginVisible)
    setSignUpVisible(!signUpVisible)
  }

  return (
    <userContext.Provider
      value={{
        signUpVisible,
        loginVisible,
        userConnectionVisible,
        handleSignUpChange,
        handleLoginChange,
        handleSignSwitch
      }}
    >
      {children}
    </userContext.Provider>
  );
    };


export const useUser = () => useContext(userContext);