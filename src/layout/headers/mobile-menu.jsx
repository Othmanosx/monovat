import React from "react";
import useSticky from "../../hooks/use-sticky";
import Sidebar from "../../components/common/off-canvas";
import Image from "next/image";

const MobileMenu = ({ logo, bg, transparent = true }) => {
  const { headerSticky } = useSticky();
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  return (
    <React.Fragment>
      {headerSticky && <div style={{ height: 160 }}></div>}
      <div
        id="header-sticky-mobile"
        className={`tp-md-menu ${
          transparent ? "header-transparent" : ""
        } d-lg-none pt-40 pb-40 
    ${bg ? bg : ""} ${headerSticky ? "header-sticky" : ""}`}
      >
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-6">
              <div className="tp-logo">
                <a className="d-flex justify-content-enter align-items-center">
                  <h2 className="pt-2" style={{ fontWeight: 700 }}>
                    MonoVat
                  </h2>
                  <Image
                    src="/assets/img/logo/monovat.png"
                    alt=""
                    height={80}
                    width={80}
                    objectFit="cover"
                  />
                </a>
              </div>
            </div>
            <div className="col-6">
              <div className="bar text-start">
                <button
                  className="tp-menu-bar"
                  onClick={() => setSidebarOpen(true)}
                  type="button"
                >
                  <i className="fal fa-bars"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* off canvas start */}
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      {/* off canvas end */}
    </React.Fragment>
  );
};

export default MobileMenu;
