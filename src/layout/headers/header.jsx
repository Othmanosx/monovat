import React from "react"
import Link from "next/link"
import useSticky from "../../hooks/use-sticky"
import Sidebar from "../../components/common/off-canvas"
import NavMenus from "./nav-menus"
import MobileMenu from "./mobile-menu"
import Image from "next/image"

const Header = () => {
  const { headerSticky } = useSticky()
  const [sidebarOpen, setSidebarOpen] = React.useState(false)
  return (
    <React.Fragment>
      <header className="d-none d-lg-block">
        <div
          id="header-sticky"
          className={`tp-header-area header-transparent pl-165 pr-165 pt-35 
        ${headerSticky ? "header-sticky" : ""}`}
        >
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xl-3 col-lg-3">
                <div className="tp-logo">
                  <Link href="/">
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
                  </Link>
                </div>
              </div>
              <div className="col-xl-7 col-lg-7">
                <div className="tp-main-menu">
                  <nav id="mobile-menu">
                    {/* nav menus start */}
                    <NavMenus />
                    {/* nav menus end */}
                  </nav>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2">
                <div
                  className="tp-menu-bar text-start"
                  onClick={() => setSidebarOpen(true)}
                >
                  <button>
                    <i className="fal fa-bars"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* <!-- mobile-menu-area --> */}
      <MobileMenu logo={"logo.png"} />
      {/* <!-- mobile-menu-area-end --> */}

      {/* off canvas start */}
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      {/* off canvas end */}
    </React.Fragment>
  )
}

export default Header
