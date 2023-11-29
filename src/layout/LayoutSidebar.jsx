import { Footer } from "../components/Footer/Footer";
import { Nav } from "../components/Nav/Nav";
import "./LayoutSidebar.scss";

export const LayoutSidebar = ({children}) => {
  return (
    <div className="main">
      <header>
        <Nav />
      </header>
      <div className="container_double">
        {children}<aside>Soy el sidebar</aside></div>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};
