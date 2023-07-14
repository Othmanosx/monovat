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
    link: "#products",
    has_dropdown: true,
    sub_menus: [
      {
        link: "#products",
        title: "رزن شنرتك",
      },
      {
        link: "#products",
        title: "طابعات فروزن",
      },
      {
        link: "#products",
        title: "التراسونك كلينر",
      },
      {
        link: "#products",
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
