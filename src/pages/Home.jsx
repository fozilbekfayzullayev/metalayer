import React from "react";
import { Link } from "react-scroll";
import ArticleCard from "../components/ArticleCard";

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
            className="text-gold text-lg md:text-xl mt-6 md:mt-8 inline-block underline cursor-pointer hover:opacity-65 transition-opacity duration-75 ease-in font-semibold"
          >
            Подробная информация
          </Link>
        </div>
      </section>

      {/* PRODUCT SECTION */}
      <section id="product" className="product-section">
        <div className="custom-container">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-10 md:mb-16 text-center uppercase">
            Наши продукты
          </h2>
          <div className="product-cards flex flex-wrap md:flex-nowrap gap-4 justify-center">
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
