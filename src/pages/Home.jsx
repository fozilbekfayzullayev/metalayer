import React from "react";
import { Link } from "react-scroll";
import { Features, ArticleCard } from "../components";

const Home = () => {
  const feauturesData = [
    {
      title: "Наша деятельность",
      body: "Основная деятельность нашей компании — нанесение защитных покрытий на металлические поверхности.Мы обеспечиваем металлические конструкции надежными покрытиями, защищающими их от коррозии, износа и химического воздействия (кислот, влаги и других факторов).",
    },
    {
      title: "Наша служба доставки",
      body: "Кроме того, наша компания осуществляет поставку необходимых материалов для различных заводов и производственных предприятий.Наши покрытия широко применяются в промышленном оборудовании, металлических конструкциях и инженерных сооружениях.",
    },
    {
      title: "Наш опыт и команда",
      body: "Несмотря на то, что компания была основана недавно, наша команда имеет 5–6 летний опыт работы в данной сфере. В своей деятельности мы ставим во главу угла качество, надежность и долгосрочное сотрудничество.",
    },
    {
      title: "Наша цель",
      body: "Наша цель — предлагать клиентам надежные, современные и эффективные решения в области защиты, а также вносить свой вклад в развитие промышленного сектора нашей страны.",
    },
  ];
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
          <div className="product-cards flex flex-wrap md:flex-nowrap gap-4 justify-center items-start">
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
          </div>
        </div>
      </section>

      {/* ABOUT US */}
      <section id="about" className="about-section bg-amber-100">
        <div className="custom-container">
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-10 md:mb-16 text-center uppercase">
            О компании
          </h2>
          <div className="about-features flex flex-wrap gap-15 justify-between items-center px-16">
            {feauturesData.map((feature, index) => (
              <Features
                key={index}
                index={index}
                title={feature.title}
                body={feature.body}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
