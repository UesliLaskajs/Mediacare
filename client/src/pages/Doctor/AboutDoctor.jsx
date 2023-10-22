import { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

const AboutDoctor = () => {
  const [doctor, setDoctor] = useState('')
  const { id } = useParams();
  const [feedback, setFeedback] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:3000/doctors/${id}`)
      .then((res) => {
        console.log(res.data)
        setDoctor(res.data)
      })
      .catch((err) => {
        console.log("Error getting specific Doctor Data", err)
      })
  }, [id])

  const eventHandler = (e) => {
    e.preventDefault();
    axios.patch(`http://localhost:3000/doctor/edit/${id}`, {
      feedback
    })
      .then(() => {
        console.log("Succesfully Sent")
      })
      .catch((err) => {
        console.log("Couldnt Post", err)
      })
      setFeedback("")
  }
  return (
    <>
      <section className="pt-[60px]">
        <div className="container">
          <div className="flex flex-col">
            <div className="fullname heading ">
              {doctor.fullname}
            </div>
            <div className="speciality">
              Speciality:{doctor.speciality}
            </div>
            <div className="patients">
              Total Patients:{doctor.patients}
            </div>
            <div className="hospital">
              Hospital:{doctor.hospital}
            </div>
            <div className="schooling">
              Schooling:{doctor.schooling}
            </div>
            <div className="booking">
              Booked: {doctor.booked  === false ? "false" : "true"}
            </div>

            <form onSubmit={eventHandler}>
              <label htmlFor="feedback" className="block text-sm font-medium text-gray-600">Feedback:</label>
              <textarea id="feedback" name="feedback"
                placeholder="Enter feedback"
                className="mt-1 p-2 rounded border w-full focus:outline-none focus:border-blue-500"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)} />
              <button className="btn">
                Submit
              </button>
            </form>

          </div>
        </div>
      </section>
    </>
  )
}

export default AboutDoctor;