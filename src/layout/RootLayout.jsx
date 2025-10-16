import { Outlet } from "react-router";
import { Navbar } from "../components";

const RootLayout = () => {
  return (
    <>
      <nav className="border-b-8 border-black relatives">
        <Navbar />
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
