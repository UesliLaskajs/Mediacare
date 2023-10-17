
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import logos from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <section className="pt-[60px]">
            <div className="container">
                <div className="flex justify-between items-center">
                    <div className="logo_social w-[40%] flex flex-col justify-start items-center">
                        <img src={logos} alt="Logo" />
                        <p className="text_para">
                            BetaPlan Solo Project by <strong>Uesli Laska</strong>
                        </p>
                        <div className="social_media icons flex justify-between items-center w-[30%]">
                            <a href="https://www.facebook.com">
                                <FontAwesomeIcon icon={faFacebook} size="2x" />
                            </a>
                            <a href="https://www.twitter.com">
                                <FontAwesomeIcon icon={faTwitter} size="2x" />
                            </a>
                            <a href="https://www.instagram.com">
                                <FontAwesomeIcon icon={faInstagram} size="2x" />
                            </a>
                        </div>
                    </div>

                    <div className='w-[60%] flex justify-between items-center'>
                        <div className="colums flex flex-col w-[30%] justify-center items-center">
                            <h1 className='text-[1.3rem] font-bold'>Quick Links</h1>
                            <Link to={"Home"}> <p className='text_para '>Home</p> </Link>
                            <Link to={""}> <p className='text_para '>About Us</p> </Link>
                            <Link to={"/services"}> <p className='text_para '>Services</p> </Link>
                            <Link to={""}> <p className='text_para '>Blog</p> </Link>
                        </div>

                        <div className="colums flex flex-col w-[30%] justify-center items-center">
                            <h1 className='text-[1.3rem] font-bold'>Needs:</h1>
                            <Link to={"/doctors"}> <p className='text_para '>Find a Doctor</p> </Link>
                            <Link to={""}> <p className='text_para '>Request an Appoinment</p> </Link>
                            <Link to={""}> <p className='text_para '>Find a Location</p> </Link>
                            <Link to={""}> <p className='text_para '>Opinion</p> </Link>
                        </div>

                        <div className="colums flex flex-col w-[30%] justify-start items-baseline">
                            <h1 className='text-[1.3rem] font-bold'>Quick Links</h1>
                            <Link to={"home"}> <p className='text_para '>Uesli</p> </Link>
                            <Link to={""}> <p className='text_para '>Contact Us</p> </Link>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
