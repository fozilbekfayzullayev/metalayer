import { Link } from "react-scroll";
import { AboutUs, Produscts } from "../components";

const Home = () => {
  return (
    <>
      {/* HOME SECTION */}
      <section id="/" className="hero">
        <div className="custom-container text-center md:text-left">
          <h1 className="text-4xl md:text-7xl font-bold text-white md:leading-[1.2] leading-[1.1] uppercase">
            защита.
            <br /> Прочность.
            <br /> Долговечность.
          </h1>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="text-gold text-lg md:text-xl mt-6 md:mt-8 inline-block underline cursor-pointer hover:opacity-65 transition-opacity duration-75 ease-in font-semibold"
          >
            Подробная информация
          </Link>
        </div>
      </section>

      {/* PRODUCT SECTION */}
      <Produscts />

      {/* ABOUT US */}
      <AboutUs />
    </>
  );
};

export default Home;
