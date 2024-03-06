import Header from "./Header/Header";
import { Main } from "./Main/Main";
import Footer from "./Footer/Footer";

export const Layout = () => {
  return (
    <div className="wrapper">
      <header>
        <Header />
      </header>
      <main>
        <Main />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
