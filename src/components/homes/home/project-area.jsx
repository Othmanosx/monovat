import Link from "next/link";
import React from "react";
import { portfolio_data } from "../../../data";

const ProjectArea = () => {
  const [category, setCategory] = React.useState("Website Design");
  const items = portfolio_data.filter((p) => p.home);
  const [portfolioItems, setPortfolioItems] = React.useState(
    items.filter((i) => i.category === category)
  );
  const categories = [...new Set(items.map((p) => p.category))];

  const handleCategory = (c) => {
    setCategory(c);
    const new_items = items.filter((i) => i.category === c);
    setPortfolioItems(new_items);
  };

  const bigItems = portfolioItems.filter((i) => i.big);
  const sm_items = portfolioItems.filter((i) => i.sm);

  return (
    <div id="products" className="tp-project-area p-relative pt-130 pb-100">
      <div className="tp-project-shape" style={{ zIndex: 1 }}>
        <img src="assets/img/project/project-shape.png" alt="" />
      </div>
      <div className="container">
        <div
          className="row align-items-center mb-15 wow tpfadeUp"
          data-wow-duration={`.4s`}
          data-wow-delay={`.1s`}
        >
          <div className="col-xl-5 col-lg-12 col-md-12">
            <div className="tp-project-section-box">
              <h5 className="tp-subtitle">منتجاتنا</h5>
              <h2 className="tp-title">تعرف على منتجاتنا</h2>
            </div>
          </div>
        </div>

        <div className="project-tab-main">
          <div className="row gx-1">
            {bigItems.map((item) => (
              <div key={item.id} className="col-xl-6 col-lg-12">
                <div className="tp-project-box mb-20">
                  <div className="tp-project-img fix mb-3">
                    <img className="w-100" src={item.img} alt="" />
                  </div>
                  <div className="tp-project-content ml-20">
                    <h2
                      className="pro-lg-title mb-0"
                      style={{ fontWeight: 700 }}
                    >
                      {item.title}
                    </h2>
                    <p className="mb-0">{item.sm_text}</p>
                  </div>
                </div>
              </div>
            ))}
            <div className="col-xl-12 col-lg-12">
              <div className="row ">
                {sm_items.map((item, i) => (
                  <div
                    data-wow-duration={`.4s`}
                    data-wow-delay={`.${2 + i * 2}s`}
                    key={item.id}
                    className="col-xl-6 col-lg-12 wow tpfadeUp"
                  >
                    <div className="tp-project-box-sm d-flex align-items-center mb-20">
                      <div className="tp-project-sm-img fix ml-25 mr-35">
                        <img src={item.img} alt="" />
                      </div>
                      <div className="tp-project-sm-content">
                        <h3
                          className="pro-sm-title"
                          style={{ fontWeight: 700 }}
                        >
                          {item.title}
                        </h3>
                        <p style={{ paddingLeft: "1rem" }}>{item.sm_text}</p>
                        <div style={{ display: "flex" }}>
                          <Link href={item.link}>
                            <a
                              class="tp-btn-sm"
                              style={{
                                marginRight: "auto",
                                marginLeft: "2rem",
                              }}
                            >
                              عرض <i class="far fa-arrow-left"></i>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <div class="row">
                  <div class="col-xl-12">
                    <div class="tp-blog-button text-center mt-30">
                      <Link href="/product">
                        <a class="tp-btn">
                          جميع المنتجات
                          <i
                            style={{ transform: "rotateY(180deg)" }}
                            class="fas fa-external-link-alt pe-0 me-2"
                          ></i>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectArea;
