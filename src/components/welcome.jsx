import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Profile } from "./profile";

export const Welcome = () => {
  const { logout } = useAuth0();

  return (
    <>
      <div>Welcome!</div>
      <Profile></Profile>
      <button onClick={() => logout({ returnTo: window.location.origin })}>
        Log Out
      </button>
    </>
  );
};
