import React from "react";
import {useUser} from "../contexts/user.context"

import SignUp from "./signUp";
import LogIn from "./logIn";

const UserConnection = () => {
    // const {handleSignUpChange} = useUser()
    const {signUpVisible, loginVisible } = useUser()
  return (
    <div data-component="user-connection" className="user-connection container">
        {signUpVisible && <SignUp/>}
        {loginVisible && <LogIn/>}
    </div>
  );
};

export default UserConnection;
