import Style from "./Home.module.scss";
import MainPage from "./MainPageTB/MainPage";

const Home = () => {
  return (
    <>
      <div className={Style.wrapper}>
        <MainPage />
      </div>
    </>
  );
};

export default Home;
