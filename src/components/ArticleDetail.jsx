import React from "react";

const ArticleDetail = ({ product }) => {
  const {
    model,
    color,
    composition,
    morphology,
    material,
    classification,
    mainAgentComposition,
    characteristic,
    promoterComposition,
    transportPackage,
    specification,
    trademark,
    origin,
    hsCode,
    productionCapacity,
    src,
  } = product;
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="article-img mx-auto md:mx-0">
        <iframe
          src={src + "/preview"}
          className="w-full max-w-[500px] aspect-square rounded-lg mb-8 lg:mb-0"
        ></iframe>
      </div>
      <div className="article-info">
        <div>
          <div className="bg-white pb-5 shadow-sm rounded-lg overflow-hidden">
            <div className="px-6 py-4 border-b bg-amber-100">
              <h2 className="text-lg font-semibold">
                Информация о продукте — {trademark} {model}
              </h2>
            </div>

            <table className="min-w-full text-sm text-left text-gray-700 border-t border-gray-300">
              <tbody>
                <tr>
                  <td className="px-4 py-2 font-semibold">Модель:</td>
                  <td className="px-4 py-2">{model}</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold">Цвет:</td>
                  <td className="px-4 py-2">{color}</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold">Состав:</td>
                  <td className="px-4 py-2">{composition}</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold">Морфология:</td>
                  <td className="px-4 py-2">{morphology}</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold">Материал:</td>
                  <td className="px-4 py-2">{material}</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold">Классификация:</td>
                  <td className="px-4 py-2">{classification}</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold">Основной агент:</td>
                  <td className="px-4 py-2">{mainAgentComposition}</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold">Характеристика:</td>
                  <td className="px-4 py-2">{characteristic}</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold">Состав промотора:</td>
                  <td className="px-4 py-2">{promoterComposition}</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold">Упаковка:</td>
                  <td className="px-4 py-2">{transportPackage}</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold">Спецификация:</td>
                  <td className="px-4 py-2">{specification}</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold">Торговая марка:</td>
                  <td className="px-4 py-2">{trademark}</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold">Происхождение:</td>
                  <td className="px-4 py-2">{origin}</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold">HS код:</td>
                  <td className="px-4 py-2">{hsCode}</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold">
                    Производительность:
                  </td>
                  <td className="px-4 py-2">{productionCapacity}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
