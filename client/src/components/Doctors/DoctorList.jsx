import { doctors } from '../../assets/data/doctors'
import DoctorDetails from './DoctorDetails'

const DoctorList = () => {
    return (
        <section className='pt-[60px]'>
            <div className="container">
                <div className='flex flex-row justify-between items-center'>
                    {doctors.map((doctor) => (
                        <DoctorDetails key={doctor.id} doctor={doctor} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default DoctorList;
