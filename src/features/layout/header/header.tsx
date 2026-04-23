import { Container } from "../../../common";
import logo from "../../../assets/favicon-32x32.png";
import { Link } from "react-router";

export const Header: React.FC = () => {
  return (
    <header>
      <nav className="navbar">
        <Container>
          <Link to={"/"} className="navbar-brand">
            <img src={logo} className="img-fluid me-2" alt="nav-logo" />
            Trillonomics
          </Link>
        </Container>
      </nav>
    </header>
  );
};
