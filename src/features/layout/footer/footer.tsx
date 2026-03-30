import { Container } from "../../../common";

export const Footer: React.FC = () => {
  const date = new Date();

  return (
    <footer className="mt-5">
      <Container>
        <div className="text-center rounded p-5">
          <p>
            <strong>Trillonomics</strong> - &copy; {date.getFullYear()} - All
            Rights Reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};
