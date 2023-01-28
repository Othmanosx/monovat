import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import menu_data from "../../../layout/headers/menu-data"

const sidebar_contents = {
  title: <>MonoVat</>,
  inst_imgs: [
    "/assets/img/offcanvas/insta-1.jpg",
    "/assets/img/offcanvas/insta-2.jpg",
    "/assets/img/offcanvas/insta-4.jpg",
    "/assets/img/offcanvas/insta-4.jpg",
  ],
}
const { inst_imgs, title } = sidebar_contents

const Sidebar = ({ isOpen, setIsOpen }) => {
  const [navTitle, setNavTitle] = useState("")

  const openMobileMenu = (menu) => {
    if (navTitle === menu) {
      setNavTitle("")
    } else {
      setNavTitle(menu)
    }
  }
  return (
    <>
      <div className="tp-offcanvas-area" onClick={() => setIsOpen(false)}>
        <div className={`tpoffcanvas ${isOpen ? "opened" : ""}`}>
          <div className="tpoffcanvas__logo">
            <Link href="/">
              <a className="d-flex justify-content-enter align-items-center">
                <Image
                  src="/assets/img/logo/monovat.png"
                  alt=""
                  style={{ filter: "contrast(0) brightness(1.5)" }}
                  height={80}
                  width={80}
                  objectFit="cover"
                />
              </a>
            </Link>
          </div>
          <div
            className="tpoffcanvas__close-btn"
            onClick={() => setIsOpen(false)}
          >
            <button className="close-btn">
              <i className="fal fa-times-hexagon"></i>
            </button>
          </div>
          <div className="tpoffcanvas__content d-none d-sm-block">
            <p>{title}</p>
          </div>
          <div className="mobile-menu d-lg-none">
            <div className="mm-menu">
              <ul>
                {menu_data.map((menu, i) => (
                  <li
                    key={i}
                    className={
                      !menu.has_dropdown
                        ? ""
                        : navTitle === menu?.title
                        ? "has-droupdown active"
                        : "has-droupdown"
                    }
                  >
                    {menu.has_dropdown && (
                      <button onClick={() => openMobileMenu(menu.title)}>
                        {menu.title}{" "}
                      </button>
                    )}
                    <ul
                      className={
                        navTitle === menu?.title
                          ? "sub-menu active"
                          : "sub-menu"
                      }
                    >
                      {menu?.sub_menus?.map((sub, i) => (
                        <li key={i}>
                          <Link href={`${sub.link}`}>{sub.title}</Link>
                        </li>
                      ))}
                    </ul>
                    {!menu.has_dropdown && (
                      // <Link href={menu.link}>{menu.title}</Link>

                      <Link href={menu.link}>
                        <p className="tp-btn w-100">{menu.title}</p>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="tpoffcanvas__contact">
            <p>
              مختصين بتطوير قطاع صناعة الاسنان 🦷 (طابعات ثلاثية الابعاد-رزنات
              اسنان-ماسحات ضوئية-تدريبات-CAD/CAM-exocad) وكيل شركة شنرتك لرزنات
              الاسنان في العراق
            </p>
            <p>تواصل معنا</p>
            <ul>
              <li>
                <i className="fas fa-star"></i> <p>العراق، موصل، اربيل</p>
              </li>
              <li>
                <i className="fas fa-star"></i>
                <a href="https://instagram.com/mono_vat">mono_vat@</a>
              </li>
              <li>
                <i className="fas fa-star"></i>
                <a href="tel:+9647507881482">07507881482</a>
              </li>
              <li>
                <i className="fas fa-star"></i>
                <a href="mailto:monovat7@gmail.com">monovat7@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* overlay start */}
      <div
        onClick={() => setIsOpen(false)}
        className={`body-overlay ${isOpen ? "apply" : ""}`}
      ></div>
      {/* overlay end */}
    </>
  )
}

export default Sidebar
