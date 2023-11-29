import { Footer } from "../components/Footer/Footer";
import { Nav } from "../components/Nav/Nav";
import "./Layout.scss";

export const Layout = ({ children }) => {
  return (
    <div className="main">
      <header>
        <Nav />
      </header>
      <div className="container">{children}</div>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};
