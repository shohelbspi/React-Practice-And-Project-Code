import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()


  async function fetchData() {
    setLoading(true)
    const response = await axios("https://fakestoreapi.com/products");
    setProducts(response.data);
    setLoading(false)
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <Loader />

  }

  return (
    <div className="min-h-screen bg-slate-100 px-6 py-10">

      <div className="mx-auto mb-8 max-w-7xl">
        <p className="mb-1 text-sm font-semibold uppercase tracking-widest text-teal-600">
          Our Collection
        </p>

        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Explore Products
        </h1>

        <p className="mt-2 text-slate-500">
          Discover quality products at the best prices.
        </p>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" >
        {products.map((item) => (
          <div
            key={item.id}
            className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl" onClick={function(){
              navigate(`/product/${item.id}`)
            }}
          >
            <div className="relative flex h-64 items-center justify-center bg-slate-50 p-6">
              <img
                className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                src={item.image}
                alt={item.title}
              />

              <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold capitalize text-slate-600 shadow-sm">
                {item.category}
              </span>
            </div>

            <div className="p-5">

              <div className="mb-3 flex items-center gap-2">
                <span className="rounded-md bg-amber-50 px-2 py-1 text-sm font-semibold text-amber-600">
                  ★ {item.rating.rate}
                </span>

                <span className="text-sm text-slate-400">
                  ({item.rating.count} reviews)
                </span>
              </div>

              <h2 className="mb-3 line-clamp-2 min-h-[56px] text-lg font-semibold leading-7 text-slate-900">
                {item.title}
              </h2>

              <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                <div>
                  <p className="text-xs font-medium text-slate-400">
                    Price
                  </p>

                  <p className="text-xl font-bold text-slate-900">
                    ${item.price}
                  </p>
                </div>

                <button className="rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-600">
                  Add to Cart
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;