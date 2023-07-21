import React from "react";
import { productsData } from "../../data";
import ProductsItem from "./products-item";
import { collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import firebaseInitialization from "../../firebase/firebase.init";

const db = firebaseInitialization();

const product_items = productsData;

const ProductsArea = () => {
  const [value, loading, error] = useCollection(
    collection(firebaseInitialization(), "products")
  );
  const products =
    value?.docs?.map((doc) => ({ id: doc.id, ...doc?.data() })) || [];

  return (
    <>
      <div className="tp-product-area pt-130 pb-130">
        <div className="container">
          <div className="row">
            <ProductsItem
              itemsPerPage={8}
              items={loading || error ? product_items : products}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsArea;
