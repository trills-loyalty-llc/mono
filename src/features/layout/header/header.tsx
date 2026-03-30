import { Container } from "../../../common";

export const Header: React.FC = () => {
  return (
    <header>
      <nav className="navbar">
        <Container>
          <a className="navbar-brand">Trillonomics</a>
        </Container>
      </nav>
    </header>
  );
};
