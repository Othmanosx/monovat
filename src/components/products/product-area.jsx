import React, { useEffect, useState } from "react";
import { productsData } from "../../data";
import ProductsItem from "./products-item";
import { collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import firebaseInitialization from "../../firebase/firebase.init";
import Tabs from "../Tabs";
import { useRouter } from "next/router";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const db = firebaseInitialization();

const product_items = productsData;

const ProductsArea = () => {
  const router = useRouter();
  const [animationParent] = useAutoAnimate();
  const { filter } = router.query;
  const [active, setActive] = useState(filter || "all");
  useEffect(() => {
    filter && setActive(filter);
  }, [filter]);

  const [value, loading, error] = useCollection(
    collection(firebaseInitialization(), "products")
  );
  const products =
    value?.docs
      ?.map((doc) => ({ id: doc.id, ...doc?.data() }))
      .filter((item) =>
        active === "all" ? !!item : item.category === active
      ) || [];

  return (
    <>
      <div className="tp-product-area pt-30 pb-130">
        <Tabs active={active} setActive={setActive} />
        <div className="container">
          <div className="row" ref={animationParent}>
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
