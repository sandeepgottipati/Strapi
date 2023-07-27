import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";
import Navlinks from "./Navlinks";

const Navbar = () => {
  const { openSidebar, setPageId } = useGlobalContext();
  return (
    <nav
      onMouseOver={(e) => {
        if (!e.target.classList.contains("nav-link")) {
          setPageId(null);
        }
      }}
    >
      <div className="nav-center">
        <h3 className="logo">Strapi</h3>
        <button className="toggle-btn" onClick={openSidebar}>
          <FaBars />
        </button>
        <Navlinks />
      </div>
    </nav>
  );
};
export default Navbar;
