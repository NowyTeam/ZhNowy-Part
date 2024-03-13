import Style from "./Footer.module.scss";
const Footer = () => {
  return (
    <>
      <div className={Style.Footer}>
        <div className={Style.Footer_Wrapper}>
          <h1>
            Designed by <span>Nowy</span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Footer;
