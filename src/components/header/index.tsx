import { Link } from "react-router-dom";
import Container from "../container";

const Header = () => {
  return (
    <Container>
      <header
        className="text-white mt-4 mb-10 bg-coal-foreground/50 rounded-2xl border
       border-coal-border px-3 py-2 flex items-center justify-between backdrop-blur-sm"
      >
        <Link to="/">
          <img src="/logo.avif" width={30} height={30} alt="Logo" />
        </Link>

        <div className="flex justify-center">
          <ul className="p-0 flex items-center gap-6 text-sm">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/">Stories</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>

        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
          width={30}
          height={30}
          alt="Logo"
          className="rounded-md"
        />
      </header>
    </Container>
  );
};
export default Header;
