import { NavLink } from "react-router-dom";
import Style from "./Header.module.scss";

const Header = () => {
  return (
    <>
      <div className={Style.Header}>
        <div className={Style.Header_Wrapper}>
          <div className={Style.Logo}>
            <img src="../../../../pngwing.com (9).png" alt="" />
            <h1>Nowy</h1>
          </div>
          <div className={Style.Links}>
            <NavLink to="/" className={Style.Link}>
              Home
            </NavLink>

            <NavLink to="/Projects" className={Style.Link}>
              Projects
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
