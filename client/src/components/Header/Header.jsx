import logo from "../../assets/images/logo.png";
import { NavLink, Link } from "react-router-dom";
import userImg from "../../assets/images/avatar-icon.png"
const Header = () => {
  const menuLinks = [
    {
      path: "/home",
      display: "Home"
    },
    {
      path: "/doctors",
      display: "Find Doctor"
    },
    {
      path: "/services",
      display: "Services"
    },
    {
      path: "/contact",
      display: "Contact Us"
    }
  ];

  return (
    <header className="header flex items-center sticky_header">
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <img src={logo} alt="" />
          </div>

          <div className="navigation">
            <ul className="flex items-center gap-[2.3rem]">
              {menuLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className="text-primaryColor text-[16px] font-[600] hover:text-purpleColor"
                    activeclassname="text-primaryColor" // Add this line for active link styling
                    exact={true.toString()}
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

                <div className="flex items-center gap-4">
                  <div>
                    <Link to="/">
                      <figure className="w-[35px] h-[35px] rounded-full">
                        <img src={userImg} className="w-full rounded-full" />
                      </figure>
                    </Link>
                  </div>
                  <Link to={"/login"}>
                    <button className="bg-primaryColor py-2 px-5 font-[600] h-[44px] flex items-center justify-center rounded-[50px]">Login</button>
                  </Link>
                </div>
                
        </div>
      </div>
    </header>
  );
};

export default Header;
