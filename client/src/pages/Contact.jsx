import  { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Contact = () => {
  useEffect(() => {

    const myMap = L.map('map').setView([41.3275, 19.8187], 7);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(myMap);

    L.marker([41.3275, 19.8187]).addTo(myMap)
      .bindPopup('Tirana, Albania')
      .openPopup();
  }, []);

  return (
    <section className="pt-6 z-[-10]">
      <div className="container mx-auto ">
        <div className="flex flex-row justify-between items-center">
          <div id="map" style={{ width: '50%', height: '400px' }}></div>
          <div className='w-[40%] flex flex-col justify-center items-center'>
            <div className="heading">
              Welcome to Our Office at MediaCare by BetaPlan
            </div>
            <div className='text-[2rem]'>
              Contact Number:067 513 4536
            </div>
            <div className="text_para">
              Address: Rruga Ali Baushi, Prane Shkolles Xhezmi Delli
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
