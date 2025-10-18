import useFetch from "../Hooks/useFetch";
import { ArticleCard } from "../components";

const Produscts = () => {
  const { loader, products } = useFetch(
    "https://script.google.com/macros/s/AKfycbzlz7xFWP9mCPUkRdGLdzZDterC6VEW0xYqHroFiRWKcTXXG_zX4a3aLJMo7W2_D-Bm7g/exec"
  );

  console.log(products);

  return (
    <section id="product" className="product-section">
      <div className="custom-container">
        <h2 className="text-2xl md:text-3xl font-semibold text-black mb-10 md:mb-16 text-center uppercase">
          Наши продукты
        </h2>
        <div className="product-cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 ">
          {loader
            ? Array(4)
                .fill(0)
                .map((_, i) => (
                  <div
                    key={i}
                    className="max-w-[300px] w-full mx-auto bg-gray-200 rounded-lg p-4 animate-pulse"
                  >
                    <div className="w-full h-40 bg-gray-300 rounded-lg mb-4"></div>
                    <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                  </div>
                ))
            : products.map((product) => (
                <ArticleCard key={product.id} product={product} />
              ))}
        </div>
      </div>
    </section>
  );
};

export default Produscts;
