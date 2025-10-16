import { Outlet } from "react-router";
import { Navbar, Footer } from "../components";

const RootLayout = () => {
  return (
    <>
      <nav className="border-b-8 border-black relatives">
        <Navbar />
      </nav>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default RootLayout;
