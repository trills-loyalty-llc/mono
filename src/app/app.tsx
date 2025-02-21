import { Outlet } from "react-router";
import { Header } from "../features/layout/header/header";
import { Footer } from "../features/layout/footer/footer";

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
