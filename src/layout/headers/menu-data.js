const menu_data = [
  {
    id: 1,
    mega_menu: false,
    has_dropdown: false,
    title: "الرئيسية",
    link: "#home",
    sub_menus: [],
  },
  {
    id: 2,
    mega_menu: false,
    title: "خدماتنا",
    link: "#services",
    has_dropdown: true,
    sub_menus: [
      {
        link: "#services",
        title: "صيانة",
      },
      {
        link: "#services",
        title: "معايرة الطابعات",
      },
      {
        link: "#services",
        title: "اعدادات الطباعة",
      },
      {
        link: "#services",
        title: "تدريبات اكزوكاد",
      },
    ],
  },
  {
    id: 3,
    mega_menu: false,
    title: "منتجاتنا",
    link: "/product",
    has_dropdown: true,
    sub_menus: [
      {
        link: "/product?filter=resin",
        title: "رزن شنرتك",
      },
      {
        link: "/product?filter=printer",
        title: "طابعات فروزن",
      },
      {
        link: "/product?filter=cleaner",
        title: "التراسونك كلينر",
      },
      {
        link: "/product?filter=exocad",
        title: "برنامج الاكزوكاد",
      },
    ],
  },
  {
    id: 4,
    mega_menu: false,
    title: "اتصل بنا",
    link: "#contact",
  },
];
export default menu_data;
