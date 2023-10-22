import aboutDoctor from "../../assets/images/Aboutdoctor.jpg"
import { Link } from "react-router-dom"
const About = () => {
    return (
        <section className="pt-[120px]">
            <div className="container">
                <div className="flex flex-row justify-between items-center">
                    <div className="flex justify-center items-center image_container_doc w-[40%] h-[450px]">
                        <img className=" w-[400px] h-[450px] rounded-[10px]" src={aboutDoctor} alt="" />
                    </div>

                    <div className="flex flex-col  items-center  w-[50%] h-[400px] ">
                        <div className="heading flex justify-starttext-[2rem] font-700 font-bold text-heroColor mb-3">
                            Great to be one of the best in Albania
                        </div>
                        <div className="text_para">
                            With extensive medical knowledge and expertise,
                            Albanian doctors diagnose, treat, and care for patients, utilizing the latest medical advancements and techniques.
                            They exhibit a deep commitment to their patients well-being, demonstrating empathy, compassion, and understanding.
                            Albanian doctors often work in hospitals, clinics, or private practices, striving to improve the health and quality of life of those they serve.
                            Their dedication to the medical field contributes significantly to the overall healthcare system, fostering trust and confidence in the community.
                        </div>
                        <div className="flex w-[100%] justify-start ">
                            <Link to={"/contact"}>
                                <div className="btn">
                                    Learn more
                                </div>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default About