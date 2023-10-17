import { Link } from "react-router-dom";

const ServiceDetails = (prop) => {


    const { item, index } = prop;


    return (
        <div className="flex flex-col items-center w-[30%] h-[350px]" >
            <h1 className="text-[1.5rem] font-bold flex justify-start items-start w-[100%] ">{item.name}</h1>
            <p className="text_para">{item.desc}</p>
            <div className="flex justify-between w-[100%] items-center">
                <Link to={'/doctors'}>
                    <button className="btn">Click</button>
                </Link>
                <div className="border-solid border-2 border-sky-500 w-[30px] h-[30px] flex items-center bg-yellowColor">
                    {index + 1}
                </div>
            </div>
        </div>
    )
}

export default ServiceDetails