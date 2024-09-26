import React from "react";
import CardProduct from "./CardProduct";
import { useGetProductsQuery } from "../../../redux/services/ProductApi";

const CardProducts = ({ category_id, name_category }) => {
  const { data: products, error, isLoading } = useGetProductsQuery();

  console.log("Is Loading:", isLoading);
  console.log("Products Data:", products); // Should log product data if successful
  console.log("Error:", error);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      {/* <h1>ini adalah card prduct</h1> */}
      {/* {category_id ===  && ( */}
      <>
        <div className="bg-[#F2E6D8] mx-[9.5vw] h-[4.2vw] py-[0.7vw] text-[#5A4943] mt-[3vw] bebas-neue-regular text-center text-[2vw] rounded-[2vw]">
          <h1>{name_category}</h1>
        </div>
        <div className="grid-cols-4 grid w-[80vw] mx-[8.5vw] my-[2vw] mt-[2.1vw]">
          {products &&
            products
              .filter((product) => product.category_id === category_id) // Filter products by category
              .map((product) => (
                <div key={product.id}>
                  <CardProduct
                    id={product.id}
                    name={product.name_product}
                    price={product.price}
                    image={product.photo_product}
                  />
                </div>
              ))}
        </div>
      </>
      {/* )} */}
    </>
  );
};

export default CardProducts;
