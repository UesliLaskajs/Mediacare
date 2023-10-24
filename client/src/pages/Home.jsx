import doktorri1 from "../assets/images/doktorri.png"
import doktor2 from "../assets/images/pexels-cottonbro-studio-3957987.jpg"
import doktor3 from "../assets/images/pexels-karolina-grabowska-4021779.jpg"
import { Link } from 'react-router-dom'
import ikon1 from "../assets/images/icon01.png"
import ikon2 from "../assets/images/icon02.png"
import ikon3 from "../assets/images/icon03.png"
import About from "../components/About/About"
import ListofServices from "../components/Services/ListofServices"
import doktorPipero from "../assets/images/pipero.png"
import DoctorList from "../components/Doctors/DoctorList"
import DoctorForm from "../components/Doctors/DoctorForm"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
// import Footer from "../components/Footer/Footer"
// import Testimonial from "../components/Testimonial/Testimonial"
const Home = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login");
      }
      try {
        const { data } = await axios.post(
          "http://localhost:3000",
          {},
          { withCredentials: true }
        );
        const { status, user } = data;
        setUsername(user);
        if (!status) {
          removeCookie("token");
          navigate("/login");
        }
      } catch (error) {
        console.error("Error verifying token:", error);
        removeCookie("token");
        navigate("/login");
      }
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  const handleLogout = () => {
    removeCookie("token");
    navigate("/signup");
  };

  return (
    <>


      <div className="hero_section">
        <section className="pt-[60px] ">
          <div className="container   ">
            <div className="flex flex-row justify-between align-center ">
              <div className="flex flex-col justify-between gap-[45px] items-center">
                <div className="flex-col justify-center items-center w-[200px] h-[150px]">
                  <h1 className="heading">{username}</h1>
                  <button className="btn" onClick={handleLogout}>Logout</button>
                </div>



                <div className="w-[100%]">
                  <h1 className="text-[3.5rem] leading-[56px]  text-heroColor font-700 ">
                    We make people live a very
                    healthy, good life
                  </h1>
                  <p className="text_para">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium minima qui aliquam ratione, repellat dignissimos amet excepturi.
                    Distinctio ex, quibusdam nihil accusantium cumque impedit cum laudantium dolor! Fugit, commodi dolorum.</p>
                  <Link to={"/doctors"}>
                    <button className="btn">Schedule an appoinment</button>
                  </Link>

                </div>

                <div className="flex justify-between w-[100%] items-center  ">
                  <div>
                    <h2 className="text-[3rem] font-700 leading-[54px] text-heroColor">40+</h2>
                    <span className="w-[100px] h-2 bg-yellow-300 rounded-full block mt-[14px]"></span>
                    <p className="text_para">Experience years</p>
                  </div>

                  <div>
                    <h2 className="text-[3rem] font-700 leading-[54px] text-heroColor">20+</h2>
                    <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[14px]"></span>
                    <p className="text_para">Location years</p>
                  </div>

                  <div>
                    <h2 className="text-[3rem] font-700 leading-[54px] text-heroColor">15+</h2>
                    <span className="w-[100px] h-2 bg-red-300 rounded-full block mt-[14px]"></span>
                    <p className="text_para">Duty years</p>
                  </div>
                </div>



              </div>
              <div className="w-[100%] flex flex-row justify-between items-center p-[50px] ml-[100px]">
                <div className="first_doctor w-[50%] h-[400px]  ">
                  <img src={doktorri1} className="w-[100%] h-[400px]" />
                </div>
                <div className="w-[50%] h-[400px] h-flex flex-col justify-center items-center p-[15px]">
                  <div className="second_doctor mb-14">
                    <img src={doktor2} alt="" />
                  </div>
                  <div className="second_doctor">
                    <img src={doktor3} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="pt-[60px]">
        <div className="container">
          <div className="w-[470 px] mx-auto">
            <h2 className="heading text-center">
              Making people feel better
            </h2>
            <p className="text_para text-center ">
              Inspiring Healthier Communities,
              Committed to Caring, From Heart to Health.
            </p>
          </div>
        </div>
      </section>

      <section className="pt-[60px]">
        <div className="container">
          <div className="flex flex-row justify-between m-auto">
            <div className="flex flex-col justify-center items-center w-[30%]" >
              <div className="image_icon">
                <img src={ikon1} />
              </div>

              <div className="paraghrap">
                <p className="text_para ">
                  Providing comprehensive medical services tailored to your needs. Our skilled professionals offer personalized care, advanced treatments, and compassionate support.
                </p>
              </div>

              <Link to={'/doctors'}>
                <button className="btn hover:bg-purple-500" >GO</button>
              </Link>
            </div>

            <div className="flex flex-col justify-center items-center w-[30%]" >
              <div className="image_icon">
                <img src={ikon2} />
              </div>

              <div className="paraghrap">
                <p className="text_para ">
                  Providing comprehensive medical services tailored to your needs. Our skilled professionals offer personalized care, advanced treatments, and compassionate support.
                </p>
              </div>

              <Link to={'/doctors'}>
                <button className="btn hover:bg-purple-500" >GO</button>
              </Link>
            </div>

            <div className="flex flex-col justify-center items-center w-[30%]" >
              <div className="image_icon">
                <img src={ikon3} />
              </div>

              <div className="paraghrap">
                <p className="text_para ">
                  Providing comprehensive medical services tailored to your needs. Our skilled professionals offer personalized care, advanced treatments, and compassionate support.
                </p>
              </div>

              <Link to={'/doctors'}>
                <button className="btn hover:bg-purple-500" >GO</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <About />

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

      <ListofServices />
      <DoctorForm />

      <section className="pt-[60px]">
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="w-[40%] h-[300px]">
              <div className="heading">
                Get in touch for treatment
              </div>
              <p className="text_para">
                1.Schedule an appoinment <br />
                2.Search for doctor or contact us at BetaPlan
                3.View our doctors and the most important <br /> <strong>View their reviews</strong>
              </p>

              <Link to={'/contact'}>
                <div className="btn w-[170px]">Learn more</div>
              </Link>



            </div>
            <div className="w-[40%] h-[300px]">
              <img className="w-[70%] h-[250px] rounded-[10px]" src={doktorPipero} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="pt-[60px]">
        <div className="container flex flex-col justify-center items-center    ">
          <div className="flex flex-col justify-center items-center w-[350px]">
            <h1 className="font-bold text-4xl">Our Best Doctors</h1>
            <p className="text_para text-center">
              We provide a wide range of services that are designed to meet the needs and expectations.
            </p>
          </div>
        </div>
      </section>

      <DoctorList />

      {/* <Testimonial/> */}

    </>


  )
}

export default Home