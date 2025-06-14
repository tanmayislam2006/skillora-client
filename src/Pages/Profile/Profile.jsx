import React, { use } from "react";
import SkilloraContext from "../../Context/SkilloraContext";


const Profile = () => {
  const {user} = use(SkilloraContext)

  return (
    <div className="max-w-md w-full mx-auto bg-base-100 rounded-xl shadow-lg p-6 flex flex-col items-center border border-primary/20 mt-10">
      <img
        src={user?.photo}
        alt={user?.name}
        className="w-24 h-24 rounded-full object-cover border-4 border-primary shadow mb-4"
      />
      <h2 className="text-2xl font-bold text-primary mb-1">{user?.name}</h2>
      <p className="text-gray-600 mb-2">{user?.email}</p>
      <div className="w-full flex flex-col md:flex-row md:justify-between gap-2 mt-4">
        <div className="rounded-lg p-3 flex-1 text-center">
          <span className="block text-xs">User ID</span>
          <span className="font-mono text-sm break-all">{user?.uid}</span>
        </div>
        <div className="rounded-lg p-3 flex-1 text-center">
          <span className="block text-xs">Created</span>
          <span className="font-semibold text-sm">{new Date(user?.creationTime).toLocaleString()}</span>
        </div>
        <div className="rounded-lg p-3 flex-1 text-center">
          <span className="block text-xs">Last Sign In</span>
          <span className="font-semibold text-sm">{new Date(user?.lastSignInTime).toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;