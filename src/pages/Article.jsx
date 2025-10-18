import { Link, useParams } from "react-router";
import useFetch from "../Hooks/useFetch";
import ArticleDetail from "../components/ArticleDetail";
import { CircleArrowLeft } from "lucide-react";

const Article = () => {
  const { id } = useParams();
  const url =
    "https://script.google.com/macros/s/AKfycbzlz7xFWP9mCPUkRdGLdzZDterC6VEW0xYqHroFiRWKcTXXG_zX4a3aLJMo7W2_D-Bm7g/exec?id=" +
    id;
  const { loader, products } = useFetch(url);

  return (
    <section>
      <div className="custom-container">
        <Link
          to="/"
          className="uppercase flex items-center mb-5 gap-x-1 cursor-pointer hover:text-red-300"
        >
          <CircleArrowLeft size={28} /> назад
        </Link>
        {loader ? "Loading..." : <ArticleDetail product={products} />}
      </div>
    </section>
  );
};

export default Article;
