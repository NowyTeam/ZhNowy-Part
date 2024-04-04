import Style from "./Home.module.scss";
import MainPage from "./MainPageTB/MainPage";

const Home = () => {
  return (
    <>
      <div className={Style.wrapper}>
        <div className={Style.Main_box}>
          <div className={Style.box}>
            <div className={Style.logo}>
              <MainPage />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
