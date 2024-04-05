import Style from "./MainPage.module.scss";
import Faceit from "../../../../../svg/faceit8.svg";

const MainPage = () => {
  return (
    <>
      <div className={Style.Wrapper}>
        <div className={Style.MainBox}>
          <div className={Style.Firts_Wrapper}>
            <div className={Style.CS_GO_Info}>
              <div className={Style.Logo}>
                <img src="../../../../../public/pngwing.com (9).png" alt="" />
              </div>
              <div className={Style.Title}>
                <h3>Nowy</h3>
                <p>Nowy :3</p>
              </div>
              <div className={Style.FaceitLvl}>
                <img src={Faceit} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
