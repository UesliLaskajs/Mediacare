import { doctors } from "../../assets/data/doctors"
import DoctorDetails from "../../components/Doctors/DoctorDetails"
import DoctorApi from "./DoctorApi"
const Doctor = () => {
  return (
    <>
      {/* <section className=" bg-amber-300 h-[200px]">      Mos E Harro me e shtu si feature FInding DOctor and Navigating
        <div className="container">
          <div className="flex flex-col justify-center items-center">
            <div className="search_container">
              <div className="heading">
                Find a Doctor
              </div>
              <div className="search w-[400px]">
                <input className="w-[300px] h-[40px] rounded-[15px] bg-slate-300" type="search"
                  placeholder="Find Doctor" />
              </div>
              <button className="btn ">Search</button>
            </div>

          </div>
        </div>
      </section> */}
      <section className='pt-[60px]'>
        <div className="container">
          <div className='flex flex-row justify-between items-center'>
            {doctors.map((doctor) => (
              <DoctorDetails key={doctor.id} doctor={doctor} />
            ))} 
          </div>
        </div>
      </section>
      <section className="pt-[60px]">
        <div className="container flex flex-col justify-center items-center    ">
          <div className="flex flex-col justify-center items-center w-[350px]">
            <h1 className="font-bold text-4xl">Our Services</h1>
            <p className="text_para text-center">
              We provide a wide range of services that are designed to meet the needs and expectations.
            </p>
          </div>
        </div>
      </section>
      <DoctorApi />
    </>
  )
}

export default Doctor