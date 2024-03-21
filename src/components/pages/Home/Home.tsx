import Style from "./Home.module.scss";

const Home = () => {
  return (
    <>
      <div className={Style.wrapper}>
        <div className={Style.Main_box}>
          <div className={Style.box}>
            <div className={Style.logo}>
              <h1>Logo</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
