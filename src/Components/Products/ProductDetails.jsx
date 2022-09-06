import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();
  const productId = params.productId;
  return <div>ProductDetails {productId}</div>;
};

export default ProductDetails;
