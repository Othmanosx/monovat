import React, { useEffect } from "react";
import { HeaderSix, Wrapper, Footer } from "../../layout";
import { animationCreate } from "../../utils/utils";
import Breadcrumb from "../common/breadcrumb/breadcrumb";
import ProductsArea from "./product-area";

const Products = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <HeaderSix />
      <Breadcrumb title={"جميع المنتجات"} />
      <ProductsArea />
      <Footer />
    </Wrapper>
  );
};

export default Products;
