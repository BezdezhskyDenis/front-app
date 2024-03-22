import { createContext, useContext, useState } from "react";

const fn_error_context_must_be_used = () => {
  throw new Error("must use userContext provider for consumer to work");
};

export const userContext = createContext({
  signUpVisible: null,
  loginVisible: null,
  handleSignUpChange: fn_error_context_must_be_used,
  handleLoginChange: fn_error_context_must_be_used,
});
userContext.displayName = "user";


export function UserProvider({ children }) {
  const [signUpVisible, setSignUpVisible] = useState(false); 
  
  const [loginVisible, setLoginVisible] = useState(false);
  
  const handleSignUpChange = () => {
    setSignUpVisible(!signUpVisible)
  }

  const handleLoginChange = () => {
    setLoginVisible(!loginVisible)
  }

  return (
    <userContext.Provider
      value={{
        signUpVisible,
        loginVisible,
        handleSignUpChange,
        handleLoginChange
      }}
    >
      {children}
    </userContext.Provider>
  );
    };


export const useUser = () => useContext(userContext);