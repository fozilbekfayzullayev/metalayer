import { Link } from "react-router";

const ArticleCard = ({ product }) => {
  const { thumbnail, model, characteristic, id } = product;

  return (
    <div className="article-card max-w-[300px] w-full mx-auto bg-[#fff] border-[#dcdcdc] border-1 rounded-lg px-4 py-6 hover:shadow-md overflow-hidden">
      <div className="card-image">
        {thumbnail && (
          <img
            className="mx-auto w-full"
            src={thumbnail}
            alt={`${model} ${characteristic}`}
            width={215}
            height={215}
          />
        )}
      </div>
      <div className="card-content">
        <h3 className="text-xl font-semibold hover:text-gold transition-colors duration-75 ease-in cursor-pointer capitalize">
          <Link to={`${id}`}>{model}</Link>
        </h3>
        <p className="text-gray-700 break-words capitalize">{characteristic}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
