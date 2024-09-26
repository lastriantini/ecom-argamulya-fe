import React from "react";
import { useGetProductsQuery } from "../../redux/services/ProductApi";
import { useParams } from "react-router-dom";
import CustomerNavbar from "../../components/Navbar/CustomerNavbar";
import SliderProduct from "../../components/DetailProduct/SliderProduct";
import ContentPreview from "../../components/DetailProduct/ContentPreview";
import DetailsReview from "../../components/DetailProduct/DetailsReview";
import ErrorPage from "../ErrorPage";

const DetailProduct = () => {
  const { id: productId } = useParams();
  // gunakan kalo sudah bisa get product by id
  //   const {
  //     data: product,
  //     isLoading,
  //     error,
  //   } = useGetProductByIdQuery(productId);

  const {
    data: products,
    error: productsError,
    isLoading: productsLoading,
  } = useGetProductsQuery();

  if (productsLoading) return <div>Loading...</div>;
  if (productsError)
    return <div><ErrorPage massage={productsError}/></div>;

  return (
    <>
      <CustomerNavbar />
      {products
        .filter((product) => product.id === Number(productId))
        .map((product) => (
          <>
            <div>Detail product id: {productId}</div>
            <div className="grid grid-cols-12 mx-[4vw] mt-[5.9vw]">
              <div className="col-span-5">
                <SliderProduct image={product.photo_product} />
              </div>
              <div className="col-span-7 ml-[2.9vw]">
                <ContentPreview
                  name={product.name_product}
                  description={product.description}
                  price={product.price}
                  stock={product.stock}
                />
              </div>
            </div>
            <DetailsReview description={product.description} product_id={product.id}/>
          </>
        ))}
    </>
  );
};

export default DetailProduct;
