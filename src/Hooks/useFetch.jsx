import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [loader, setLoader] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoader(false);
      });
  }, [url]);

  return { loader, products };
};

export default useFetch;
