import { useEffect, useState } from "react";
import useAxios from "../../hook/UseAxios";


const Volunteers = () => {
  const axiosInstance = useAxios();
  const [volunteers, setVolunteers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosInstance
      .get("/volunteers")
      .then((res) => {
        setVolunteers(res.data);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p className="text-center mt-10">Loading volunteers...</p>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center text-red-600 mb-8">
        Our Volunteers
      </h2>

      {volunteers.length === 0 && (
        <p className="text-center text-gray-500">
          No volunteers found
        </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {volunteers.map((v) => (
          <div key={v._id} className="card bg-white shadow border">
            <div className="card-body text-center">
              <img
                src={v.mainPhotoUrl}
                alt={v.fullName}
                className="w-24 h-24 rounded-full mx-auto mb-3"
              />
              <h3 className="font-bold text-lg">{v.fullName}</h3>
              <p className="text-sm">{v.email}</p>
              <p className="text-red-600 font-semibold">{v.blood}</p>
              <p>{v.upazila}, {v.district}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Volunteers;
