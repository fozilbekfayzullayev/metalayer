import { Features } from "../components";

const AboutUs = () => {
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
    <section id="about" className="about-section bg-amber-100">
      <div className="custom-container pb-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-black mb-10 md:mb-16 text-center uppercase">
          О компании
        </h2>
        <div className="about-features flex flex-wrap gap-15 justify-center md:justify-between items-center md:px-16 px-0">
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
  );
};

export default AboutUs;
