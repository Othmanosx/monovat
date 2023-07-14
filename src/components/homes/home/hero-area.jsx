import Link from "next/link";
import React from "react";

const hero_contents = {
  btn_text: "تعرف على منتجاتنا",
  btn_text_2: "اتصل بنا",
  social_links: [
    {
      id: 1,
      icon: "fab fa-facebook-f social-icon-1",
      title: "Facebook",
      link: "https://www.facebook.com/profile.php?id=100088127301992",
    },
    // {
    //   id: 3,
    //   icon: "fab fa-youtube social-icon-3",
    //   title: "Youtube",
    //   link: "https://www.youtube.com/",
    // },
    // {
    //   id: 2,
    //   icon: "fab fa-twitter social-icon-2",
    //   title: "Twitter",
    //   link: "http://twitter.com",
    // },
    {
      id: 4,
      icon: "fab fa-instagram social-icon-5",
      title: "Instagram",
      link: "https://www.instagram.com/mono_vat/",
    },
  ],
  hero_img: "/assets/img/hero/hero-1.webp",
};

const { title, text, btn_text, btn_text_2, social_links, hero_img } =
  hero_contents;

const HeroArea = () => {
  return (
    <div
      id="home"
      className="tp-hero-area tp-hero-space p-relative z-index-1 fix"
    >
      <div className="tp-hero-shape">
        <div className="shape-circle-yellow d-none"></div>
        <div className="shape-circle-blue"></div>
        <div className="shape-one">
          <img src="/assets/img/hero/shape-1.png" alt="" />
        </div>
      </div>
      <div className="tp-hero-wapper">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7 col-lg-7">
              <div className="tp-hero-content">
                <div className="tp-hero-text">
                  <h2
                    className="tp-hero-title wow tpfadeUp"
                    data-wow-duration=".3s"
                    data-wow-delay=".6s"
                  >
                    مختصين بتطوير قطاع صناعة الاسنان
                  </h2>
                  <h3
                    className="wow tpfadeUp"
                    data-wow-duration=".5s"
                    data-wow-delay=".8s"
                  >
                    نساعدك كي تكون الافضل في مجال صناعة الاسنان وملحقاتها عن
                    طريق طباعة الرزن ثلاثية الأبعاد
                  </h3>
                  <p
                    className="wow tpfadeUp"
                    data-wow-duration=".6s"
                    data-wow-delay=".9s"
                  >
                    <ul>
                      <li>
                        الوكيل الرسمي والحصري لرزنات شنرتك الخاصة بصناعة الاسنان
                        وملحقاتها
                      </li>
                      <li>
                        وكالة طابعات فروزن ثلاثية الابعاد بالتعاون مع كيورتك
                      </li>
                    </ul>
                  </p>
                  <div
                    className="tp-hero-button mb-140 wow tpfadeUp"
                    data-wow-duration=".7s"
                    data-wow-delay="1s"
                  >
                    <Link href="#products">
                      <a className="tp-btn mr-30">{btn_text}</a>
                    </Link>
                    <Link href="/about-me">
                      <a className="tp-btn-grey">
                        {btn_text_2}
                        <i className="far fa-arrow-left"></i>
                      </a>
                    </Link>
                  </div>
                  <div
                    className="tp-hero-social pb-30 wow tpfadeIn"
                    data-wow-duration=".7s"
                    data-wow-delay="1.2s"
                  >
                    <div className="tp-hero-social bp-hero-social">
                      {social_links.map((l, i) => (
                        <a
                          key={i}
                          className={`social-icon-${l.id}`}
                          href={l.link}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className={l.icon}></i>
                          <span>{l.title}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 hero-tooth-img">
              <div
                className="tp-hero-big-img wow fadeInRight "
                data-wow-duration=".7s"
                data-wow-delay="1.2s"
              >
                <img src={hero_img} alt="" width={650} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroArea;
