import React from "react";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <>
      <section id="/" className="hero">
        <div className="custom-container">
          <h1 className="text-[32px] md:text-7xl font-bold text-white md:leading-[1.2] leading-[1.1] uppercase">
            защита.
            <br /> Прочность.
            <br /> Долговечность.
          </h1>
          <Link
            to="about"
            className="text-gold text-lg md:text-xl mt-6 md:mt-8 inline-block underline cursor-pointer hover:opacity-65 transition-opacity duration-75 ease-in"
          >
            Батафсил маълумот
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
