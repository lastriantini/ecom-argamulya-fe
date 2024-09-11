import React from "react";
import CustomerNavbar from "../../components/Navbar/CustomerNavbar";
import Header from "../../components/Header/Header";
import Carousel from "../../components/Carousels/carousel";
import CardProduct from "../../components/Cards/CardProduct/CardProduct";
import { useGetProductsQuery } from "../../redux/services/apiProduct";

function CustomerDashboard() {
  const { data: products, error, isLoading } = useGetProductsQuery();

  console.log("Is Loading:", isLoading);
  console.log("Products Data:", products); // Should log product data if successful
  console.log("Error:", error); 

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <CustomerNavbar />
      <Header />
      <Carousel />
      <div>
        {products &&
          products.map((product) => (
            <CardProduct 
              key={product.id}
              name={product.name_product}
              price={product.price}
              image={product.photo_product}
            />
          ))}
      </div>
    </>
  );
}

export default CustomerDashboard;
