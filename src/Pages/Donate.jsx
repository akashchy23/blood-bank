import React, { use, useState } from "react";
import useAxios from "../hook/UseAxios";
import { AuthContext } from "../provider/AuthProvider";


const Donate = () => {
  const axiosInstance = useAxios();
  const { user } = use(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleCheckOut = (e) => {
    e.preventDefault();

    const donateAmount = e.target.donateAmount.value;

    if (!donateAmount || donateAmount <= 0) {
      return alert("Please enter a valid donation amount");
    }

    const formData = {
      donateAmount: Number(donateAmount),
      donorEmail: user?.email,
      donorName: user?.displayName,
    };

    setLoading(true);

    axiosInstance
      .post("/create-payment-checkout", formData)
      .then((res) => {
        window.location.href = res.data.url;
      })
      .catch((err) => {
        console.error(err);
        alert("Something went wrong!");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-white px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center text-red-600">
            Donate Blood, Save Lives ❤️
          </h2>

          <p className="text-center text-gray-500 text-sm">
            Your contribution helps patients in need
          </p>

          <form onSubmit={handleCheckOut} className="space-y-4 mt-4">
            {/* Amount */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">
                  Donation Amount (BDT)
                </span>
              </label>
              <input
                type="number"
                name="donateAmount"
                placeholder="Enter amount"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* User Info */}
            <div className="bg-gray-50 p-3 rounded-lg text-sm">
              <p>
                <span className="font-semibold">Donor:</span>{" "}
                {user?.displayName || "Anonymous"}
              </p>
              <p>
                <span className="font-semibold">Email:</span>{" "}
                {user?.email || "Not available"}
              </p>
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary w-full"
            >
              {loading ? "Redirecting..." : "Proceed to Donate"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Donate;
