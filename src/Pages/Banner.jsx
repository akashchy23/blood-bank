import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";


const Banner = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleJoin = () => {
   
    navigate("/register");
  };

  const handleSearch = () => {
    
    if (user?.role === "donor") {
      navigate("/dashboard/add-request");
    } else {
     
      navigate("/search");
    }
  };

  return (
    <section className="bg-red-50 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-6">
          Save Lives by Donating Blood
        </h1>
        <p className="text-gray-600 mb-8 text-lg">
          Join our community of donors or search for donors in your area.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button
            onClick={handleJoin}
            className="btn btn-primary btn-lg px-8"
          >
            Join as a Donor
          </button>
          <button
            onClick={handleSearch}
            className="btn btn-outline btn-error btn-lg px-8"
          >
            Search Donors
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
