import React from "react";
import SEO from "../../components/seo";
import { productsData } from "../../data";
import { Wrapper } from "../../layout";
import ProductsDetailsMain from "../../components/product-details";
import { useRouter } from "next/router";
import { useDocument } from "react-firebase-hooks/firestore";
import { doc } from "firebase/firestore";
import firebaseInitialization from "../../firebase/firebase.init";

const ProductDynamicDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const product_item = productsData[0];
  const [value, loading, error] = useDocument(
    doc(firebaseInitialization(), "products", id)
  );
  return (
    <Wrapper>
      <SEO pageTitle={"Product Details"} />
      <ProductsDetailsMain
        key={loading}
        product={loading ? product_item : value.data()}
      />
    </Wrapper>
  );
};

export default ProductDynamicDetails;

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}
