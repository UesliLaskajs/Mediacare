import doctorImg01 from "../images/doctor-img01.png";
import doctorImg02 from "../images/doctor-img02.png";
import doctorImg03 from "../images/doctor-img03.png";

export const doctors = [
  {
    id: "01",
    name: "Dr. Fatmir Krasniqi",
    specialty: "Kirurg",
    avgRating: 4.8,
    totalRating: 272,
    photo: doctorImg01, // Assuming doctorImg01 is your image import
    totalPatients: 1500,
    hospital: "Spitali i Përgjithshëm i Tiranës",
  },
  {
    id: "02",
    name: "Dr. Selim Rexhepi",
    specialty: "Neurolog",
    avgRating: 4.8,
    totalRating: 272,
    photo: doctorImg02, // Assuming doctorImg02 is your image import
    totalPatients: 1500,
    hospital: "Spitali i Traumës dhe Neurologjisë, Durrës",
  },
  {
    id: "03",
    name: "Dr. Lulzim Qosja",
    specialty: "Dermatologe",
    avgRating: 4.8,
    totalRating: 272,
    photo: doctorImg03, // Assuming doctorImg03 is your image import
    totalPatients: 1500,
    hospital: "Spitali i Mjekësisë Familjare, Shkodër",
  },
];
