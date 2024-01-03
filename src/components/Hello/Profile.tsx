import React, { FC, useContext } from "react";
import { useUserContext } from "./UseUserContext";
import { UserContext } from "./UserDataProvider";

const Profile: FC = () => {
  const { user, setUser } = useUserContext();

  const handleNameChange = () => {
    if (user) {
      setUser({ ...user, name: "New Name" });
    }
  };

  return (
    <div>
      {user ? (
        <>
          <h2>{user.name}</h2>
          <p>Email: {user?.email}</p>
          <button onClick={handleNameChange}>Change Name</button>
        </>
      ) : (
        <p>No user available.</p>
      )}
    </div>
  );
};

export default Profile;
