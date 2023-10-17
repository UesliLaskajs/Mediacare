import { doctors } from "../../assets/data/doctors"
import DoctorDetails from "../../components/Doctors/DoctorDetails"

const Doctor = () => {
  return (
    <>
      <section className=" bg-amber-300 h-[200px]">
        <div className="container">
          <div className="flex flex-col justify-center items-center">
            <div className="search_container">
              <div className="heading">
                Find a Doctor
              </div>
              <div className="search ">
                <input type="search "
                />
              </div>
            </div>

          </div>
        </div>
      </section>
      <section className='pt-[60px]'>
        <div className="container">
          <div className='flex flex-row justify-between items-center'>
            {doctors.map((doctor) => (
              <DoctorDetails key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Doctor