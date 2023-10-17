import { services } from "../../assets/data/services"
import ServiceDetails from "./ServiceDetails"
const ListofServices = () => {
    return (
        <section className="pt-[60px]">
            <div className="container">
                <div className="flex flex-wrap flex-row justify-between items-center">
                    {
                        services.map((item, index) => <ServiceDetails item={item} index={index} key={index} />)
                    }
                </div>
            </div>
        </section>
    )
}

export default ListofServices;