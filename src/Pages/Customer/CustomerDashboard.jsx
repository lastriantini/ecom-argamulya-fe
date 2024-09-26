import React from "react";
import CustomerNavbar from "../../components/Navbar/CustomerNavbar";
import Header from "../../components/Header/Header";
import Carousel from "../../components/Carousels/carousel";
import CardProducts from "../../components/Cards/CardProduct/CardProducts";
import {
  useGetProductsQuery,
  useGetCategoryQuery,
} from "../../redux/services/ProductApi";
import carousel1 from "../../assets/carousel1.png";

function CustomerDashboard() {
  const {
    data: products,
    error: productsError,
    isLoading: productsLoading,
  } = useGetProductsQuery();
  const {
    data: categories,
    error: categoriesError,
    isLoading: categoriesLoading,
  } = useGetCategoryQuery();

  if (productsLoading || categoriesLoading) return <div>Loading...</div>;
  if (productsError)
    return <div>Error fetching products: {productsError.message}</div>;
  if (categoriesError)
    return <div>Error fetching categories: {categoriesError.message}</div>;

  return (
    <>
      <CustomerNavbar />
      <Header />
      <Carousel image={carousel1} />
      {/* ini nanti dipindah ke cardproducts kalo group by categorynya udah kelar */}

      {categories &&
        categories.map((category) => (
          <>
            {/* <h1>tes</h1> */}
            <CardProducts name_category={category.name_category} category_id={category.id} />
          </>
        ))}
    </>
  );
}

export default CustomerDashboard;
