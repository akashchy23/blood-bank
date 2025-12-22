// ProfilePage.jsx
import React, { use } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const ProfilePage = () => {
    const {user} = use(AuthContext)
  if (!user) return <p>Loading...</p>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-80 text-center">
        <img
          src={user.photoURL}
          alt={user.displayName}
          className="w-24 h-24 rounded-full mx-auto mb-4"
        />
        <h2 className="text-xl font-semibold mb-2">{user.displayName}</h2>
        <p className="text-gray-600 mb-1">Email: {user.email}</p>
        <p className="text-gray-600 mb-1">
          Email Verified: {user.emailVerified ? "Yes" : "No"}
        </p>
        <p className="text-gray-600 mb-1">UID: {user.uid}</p>
      </div>
    </div>
  );
};

export default ProfilePage;
