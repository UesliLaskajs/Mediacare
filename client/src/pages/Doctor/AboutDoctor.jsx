import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const AboutDoctor = () => {
  const [doctor, setDoctor] = useState("");
  const { id } = useParams();
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:3000/doctors/${id}`)
      .then((res) => {
        console.log(res.data);
        setDoctor(res.data);
      })
      .catch((err) => {
        console.log("Error getting specific Doctor Data", err);
      });
  }, [id]);

  const eventHandler = (e) => {
    e.preventDefault();
    axios.patch(`http://localhost:3000/doctor/edit/${id}`, {
      feedback,
    })
      .then(() => {
        console.log("Successfully Sent");
      })
      .catch((err) => {
        console.log("Couldn't Post", err);
      });
    setFeedback("");
  };

  return (
    <>
      <section className="pt-12 pb-8 bg-gray-100 min-h-screen">
        <div className="container mx-auto">
          <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">{doctor.fullname}</h2>
            <p className="text-gray-600 mb-2">Speciality: {doctor.speciality}</p>
            <p className="text-gray-600 mb-2">Total Patients: {doctor.patients}</p>
            <p className="text-gray-600 mb-2">Hospital: {doctor.hospital}</p>
            <p className="text-gray-600 mb-2">Schooling: {doctor.schooling}</p>
            <p className="text-gray-600 mb-2">
              Booked: {doctor.booked ? "true" : "false"}
            </p>

            <form onSubmit={eventHandler} className="mt-4">
              <label htmlFor="feedback" className="block text-sm font-medium text-gray-600 mb-1">
                Feedback:
              </label>
              <textarea
                id="feedback"
                name="feedback"
                placeholder="Enter feedback"
                className="mt-1 p-2 rounded border w-full focus:outline-none focus:border-blue-500"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              />
              <button className="mt-2 btn bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutDoctor;
