import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const FeedbackDoc = () => {
  const [doctor, setDoctor] = useState('');
  const { id } = useParams();

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

  return (
    <section className="pt-12 pb-8 bg-gray-100 min-h-screen">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="text-3xl font-semibold">
            <span className="text-heroColor">Testing User:</span> {doctor.feedback}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackDoc;
