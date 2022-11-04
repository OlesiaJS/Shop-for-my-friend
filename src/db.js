const PRODUCTS = [
  {
    id: 1,
    title: "cap-black",
    img: "cap-black",
    price: 20,
    sale: true,
    salePercent: 2,
    categories: ["Cap"],
  },
  {
    id: 2,
    title: "casket black",
    img: "casket-black",
    price: 200,
    sale: false,
    categories: ["Casket"],
  },
  {
    id: 3,
    title: "casket green",
    img: "casket-green",
    price: 300,
    sale: true,
    salePercent: 5,
    categories: ["Casket"],
  },
  {
    id: 4,
    title: "Christmas toy",
    img: "Christmas-toy",
    price: 8,
    sale: true,
    salePercent: 5,
    categories: ["Christmas toy"],
  },
  {
    id: 5,
    title: "Christmas toy green",
    img: "Christmas-toy-green",
    price: 8,
    sale: false,
    categories: ["Christmas toy"],
  },
  {
    id: 6,
    title: "Christmas toys heart",
    img: "Christmas toys heart",
    price: 9,
    sale: false,
    categories: ["Christmas toy"],
  },
  {
    id: 7,
    title: "Christmas toys red",
    img: "Christmas-toys-red",
    price: 8,
    sale: true,
    salePercent: 4,
    categories: ["Christmas toy"],
  },
  {
    id: 8,
    title: "Christmas toys set blue",
    img: "Christmas-toys-set-blue",
    price: 30,
    sale: true,
    salePercent: 20,
    categories: ["Christmas toy"],
  },
  {
    id: 9,
    title: "Christmas toy-top",
    img: "Christmas-toy-top",
    price: 25,
    sale: true,
    salePercent: 5,
    categories: ["Christmas toy"],
  },
  {
    id: 10,
    title: "Comb",
    img: "comb",
    price: 15,
    sale: true,
    salePercent: 25,
    categories: ["Comb"],
  },
  {
    id: 11,
    title: "cutting board apple",
    img: "cutting-board-apple",
    price: 20,
    sale: false,
    categories: ["Board"],
  },
  {
    id: 12,
    title: "Board 30-20",
    img: "board-30-20",
    price: 20,
    sale: false,
    categories: ["Board"],
  },
  {
    id: 13,
    title: "Board blue",
    img: "cutting-board-blue",
    price: 20,
    sale: true,
    salePercent: 8,
    categories: ["Board"],
  },
  {
    id: 14,
    title: "Board circle-black",
    img: "cutting-board-circle",
    price: 20,
    sale: true,
    salePercent: 13,
    categories: ["Board"],
  },
  {
    id: 15,
    title: "Board green circle",
    img: "cutting-board-green-circle",
    price: 13,
    sale: false,
    categories: ["Board"],
  },
  {
    id: 16,
    title: "Cutting board pepper",
    img: "cutting-board-pepper",
    price: 30,
    sale: true,
    salePercent: 34,
    categories: ["Board"],
  },
  {
    id: 17,
    title: "Cutting board red",
    img: "cutting-board-ed",
    price: 30,
    sale: true,
    salePercent: 3,
    categories: ["Board"],
  },
  {
    id: 18,
    title: "Easter eggs set",
    img: "Easter-eggs-set",
    price: 10,
    sale: true,
    salePercent: 13,
    categories: ["Egg"],
  },
  {
    id: 19,
    title: "Sopilka",
    img: "handmade-sopilka",
    price: 20,
    sale: true,
    salePercent: 20,
    categories: ["tool"],
  },
  {
    id: 20,
    title: "Christmas toys set yellow",
    img: "Christmas-toys-set-yellow",
    price: 30,
    sale: true,
    salePercent: 20,
    categories: ["Christmas toy"],
  },
  {
    id: 21,
    title: "Christmas toys set white",
    img: "Christmas-toys-set-white",
    price: 30,
    sale: true,
    salePercent: 20,
    categories: ["Christmas toy"],
  },
  {
    id: 22,
    title: "Massage comb",
    img: "massage-comb",
    price: 10,
    sale: true,
    salePercent: 20,
    categories: ["Christmas toy"],
  },
  {
    id: 23,
    title: "Musical-instrument",
    img: "musical-instrument",
    price: 50,
    sale: true,
    salePercent: 20,
    categories: ["tool"],
  },
  {
    id: 24,
    title: "massage-comb-and-mirror",
    img: "massage-comb-and-mirror",
    price: 15,
    sale: true,
    salePercent: 20,
    categories: ["Comb"],
  },
  {
    id: 25,
    title: "Notebook couple",
    img: "notebook-couple",
    price: 12,
    sale: true,
    salePercent: 20,
    categories: ["Notebook"],
  },
  {
    id: 26,
    title: "Notebook",
    img: "notebook",
    price: 8,
    sale: true,
    salePercent: 20,
    categories: ["Notebook"],
  },
  {
    id: 27,
    title: "pen",
    img: "pen",
    price: 2,
    sale: true,
    salePercent: 20,
    categories: ["Tool"],
  },
  {
    id: 28,
    title: "Set for you",
    img: "Set-for-you",
    price: 80,
    sale: true,
    salePercent: 20,
    categories: ["Souvenir"],
  },
  {
    id: 29,
    title: "Soup bowl",
    img: "Soup-bowl",
    price: 50,
    sale: true,
    salePercent: 20,
    categories: ["Souvenir"],
  },
  {
    id: 30,
    title: "souvenir bird",
    img: "souvenir-bird",
    price: 2,
    sale: true,
    salePercent: 20,
    categories: ["Souvenir"],
  },
  {
    id: 31,
    title: "Coat of arms",
    img: "souvenir-coat-of-arms",
    price: 3,
    sale: true,
    salePercent: 20,
    categories: ["Souvenir"],
  },
  {
    id: 32,
    title: "Totem",
    img: "totem",
    price: 2,
    sale: true,
    salePercent: 20,
    categories: ["Souvenir"],
  },
  {
    id: 33,
    title: "Souvenir-map",
    img: "souvenir-map",
    price: 4,
    sale: true,
    salePercent: 20,
    categories: ["Souvenir"],
  }
];

const USERS = [
  {
    name: "Ivan",
    email: "ivan@gmail.com",
    password: "123",
    favourites: [9, 18, 7],
    status: false,
  },
];

const db = {
  productsDb: PRODUCTS,
  usersDb: USERS,
};

export default db;