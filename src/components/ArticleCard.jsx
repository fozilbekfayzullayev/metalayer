import { img } from "../assets/image";

const ArticleCard = () => {
  return (
    <div className="article-card max-w-[300px] w-full mx-auto bg-[#fff] border-[#dcdcdc] border-1 rounded-lg px-4 py-6 hover:shadow-md">
      <div className="card-image">
        <img
          className="mx-auto"
          src={img}
          alt="secent sc 2000"
          width={215}
          height={215}
        />
      </div>
      <div className="card-content">
        <h3 className="text-xl font-semibold mb-2">
          Cement SC2000 — Саноат ёпиштирувчиси
        </h3>
        <p className="text-gray-700 mb-4">
          Резина, металл ва тўқималарни юқори мустаҳкамлик билан бириктирувчи
          профессионал элим.
        </p>
      </div>
    </div>
  );
};

export default ArticleCard;
