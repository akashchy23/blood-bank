import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import useAxios from "../hook/UseAxios";

const SearchRequest = () => {
  const axiosInstance = useAxios();
  const navigate = useNavigate();

  const [districts, setDistricts] = useState([]);
  const [upazilas, setUpazilas] = useState([]);
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios.get("/district.json").then((res) => {
      setDistricts(res.data.districts || []);
    });

    axios.get("/upazila.json").then((res) => {
      setUpazilas(res.data.upazilas || []);
    });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();

    const bloodGroup = e.target.blood.value;
    const district = e.target.district.value;
    const upazila = e.target.upazila.value;

    setLoading(true);
    setSearched(true);

    axiosInstance
      .get(
        `/search-requests?bloodGroup=${bloodGroup}&district=${district}&upazila=${upazila}`
      )
      .then((res) => setResults(res.data || []))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      {/* 🔴 Header */}
      <div className="max-w-6xl mx-auto mb-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <h2 className="text-3xl font-bold text-red-600">
          Search Blood Donors
        </h2>

        <button
          onClick={() => navigate("/volunteers")}
          className="btn btn-outline btn-error"
        >
          View Volunteers
        </button>
      </div>

      {/* 🔍 Search Box */}
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-xl shadow">
        <form
          onSubmit={handleSearch}
          className="grid grid-cols-1 md:grid-cols-4 gap-4"
        >
          {/* Blood */}
          <select
            name="blood"
            defaultValue=""
            required
            className="select select-bordered"
          >
            <option value="" disabled>
              Select Blood Group
            </option>
            {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((bg) => (
              <option key={bg} value={bg}>
                {bg}
              </option>
            ))}
          </select>

          {/* District */}
          <select
            name="district"
            defaultValue=""
            required
            className="select select-bordered"
          >
            <option value="" disabled>
              Select District
            </option>
            {districts.map((d) => (
              <option key={d.id} value={d.name}>
                {d.name}
              </option>
            ))}
          </select>

          {/* Upazila */}
          <select
            name="upazila"
            defaultValue=""
            required
            className="select select-bordered"
          >
            <option value="" disabled>
              Select Upazila
            </option>
            {upazilas.map((u) => (
              <option key={u.id} value={u.name}>
                {u.name}
              </option>
            ))}
          </select>

          {/* Button */}
          <button
            className="btn btn-error"
            disabled={loading}
          >
            {loading ? "Searching..." : "Search"}
          </button>
        </form>
      </div>

      {/* 📌 Results */}
      {searched && (
        <div className="max-w-6xl mx-auto mt-10">
          {loading && (
            <p className="text-center text-gray-500">
              Searching donors...
            </p>
          )}

          {!loading && results.length === 0 && (
            <p className="text-center text-gray-500">
              No donors found for this search 😔
            </p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {results.map((donor) => (
              <div
                key={donor._id}
                className="card bg-white border border-red-100 shadow hover:shadow-lg transition"
              >
                <div className="card-body">
                  <h3 className="text-xl font-bold text-red-600">
                    {donor.bloodGroup}
                  </h3>

                  <p>
                    <span className="font-semibold">Patient:</span>{" "}
                    {donor.patientName}
                  </p>

                  <p>
                    <span className="font-semibold">Location:</span>{" "}
                    {donor.upazila}, {donor.district}
                  </p>

                  <p>
                    <span className="font-semibold">Date:</span>{" "}
                    {donor.donationDate}
                  </p>

                  <button className="btn btn-outline btn-error mt-3 w-full">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchRequest;
