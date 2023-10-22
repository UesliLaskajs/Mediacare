import { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

const FeedbadckDoc = () => {
  const [doctor, setDoctor] = useState('')
  const { id } = useParams();

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

  

  return (
    <section>
      <div className="container">
        <div className="flex justify-center">
          <div className="font-[3rem] ">
            <span className="heading">Testing User:</span><div className="text_para">{doctor.feedback}</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeedbadckDoc