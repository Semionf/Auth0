import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./profile.component";

function Welcome(props) {
  const { logout } = useAuth0();
  return (
    <div>
      Profile <br></br>
      <button
        className="btn btn-primary"
        onClick={() => logout({ returnTo: window.location.origin })}
      >
        Log Out
      </button>
      <Profile></Profile>
    </div>
  );
}

export default Welcome;
