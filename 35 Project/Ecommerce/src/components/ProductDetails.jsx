import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "./Loader";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    setLoading(true);

    try {
      const response = await axios(
        `https://fakestoreapi.com/products/${id}`
      );

      setProduct(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-slate-100 px-6 py-10">

      <div className="mx-auto max-w-6xl">

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-teal-600"
        >
          ← Back to Products
        </button>

        {/* Product Details */}
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* Product Image */}
            <div className="relative flex min-h-[500px] items-center justify-center bg-slate-50 p-10">

              <span className="absolute left-6 top-6 rounded-full bg-white px-4 py-2 text-xs font-semibold capitalize text-slate-600 shadow-sm">
                {product.category}
              </span>

              <img
                src={product.image}
                alt={product.title}
                className="max-h-[430px] w-full object-contain transition duration-500 hover:scale-105"
              />
            </div>

            {/* Product Information */}
            <div className="flex flex-col justify-center p-8 lg:p-12">

              {/* Category */}
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal-600">
                {product.category}
              </p>

              {/* Title */}
              <h1 className="mb-5 text-3xl font-bold leading-tight text-slate-900 lg:text-4xl">
                {product.title}
              </h1>

              {/* Rating */}
              <div className="mb-6 flex items-center gap-3">
                <div className="flex items-center gap-1 rounded-lg bg-amber-50 px-3 py-2">
                  <span className="text-lg text-amber-500">★</span>

                  <span className="font-semibold text-amber-700">
                    {product.rating?.rate}
                  </span>
                </div>

                <span className="text-sm text-slate-400">
                  {product.rating?.count} customer reviews
                </span>
              </div>

              {/* Price */}
              <div className="mb-6">
                <p className="mb-1 text-sm font-medium text-slate-400">
                  Price
                </p>

                <p className="text-4xl font-bold text-slate-900">
                  ${product.price}
                </p>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="mb-2 text-lg font-semibold text-slate-900">
                  Product Description
                </h2>

                <p className="leading-7 text-slate-500">
                  {product.description}
                </p>
              </div>

              {/* Divider */}
              <div className="mb-6 border-t border-slate-200" />

              {/* Buttons */}
              <div className="flex flex-col gap-3 sm:flex-row">

                <button
                  className="flex-1 rounded-xl bg-slate-900 px-6 py-3.5 font-semibold text-white shadow-sm transition hover:bg-teal-600"
                >
                  🛒 Add to Cart
                </button>

                <button
                  className="flex-1 rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-900 transition hover:border-teal-500 hover:text-teal-600"
                >
                  Buy Now
                </button>

              </div>

              {/* Features */}
              <div className="mt-8 grid grid-cols-3 gap-3 border-t border-slate-200 pt-6">

                <div className="text-center">
                  <p className="text-xl">🚚</p>
                  <p className="mt-1 text-xs font-medium text-slate-500">
                    Fast Delivery
                  </p>
                </div>

                <div className="text-center">
                  <p className="text-xl">🔒</p>
                  <p className="mt-1 text-xs font-medium text-slate-500">
                    Secure Payment
                  </p>
                </div>

                <div className="text-center">
                  <p className="text-xl">↩️</p>
                  <p className="mt-1 text-xs font-medium text-slate-500">
                    Easy Return
                  </p>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ProductDetails;