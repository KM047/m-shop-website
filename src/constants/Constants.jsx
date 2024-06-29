export const products = [
    {
        id: 1,
        name: "Homemade Chocolate Cake",
        category: "Cakes",
        description:
            "Delicious homemade chocolate cake with rich chocolate frosting.",
        price: 100,
        imageUrl:
            "https://res.cloudinary.com/kunal047/image/upload/v1703222734/samples/food/fish-vegetables.jpg",
        isAvailable: true,
    },
    {
        id: 2,
        name: "Homemade Lasagna",
        category: "Main Course",
        description:
            "A traditional homemade lasagna with layers of cheese and meat sauce.",
        price: 150,
        imageUrl:
            "https://res.cloudinary.com/kunal047/image/upload/v1703222734/samples/food/fish-vegetables.jpg",
        isAvailable: true,
    },
    {
        id: 3,
        name: "Vegan Brownies",
        category: "Desserts",
        description: "Fudgy vegan brownies made with the finest ingredients.",
        price: 200,
        imageUrl:
            "https://res.cloudinary.com/kunal047/image/upload/v1703222734/samples/food/fish-vegetables.jpg",
        isAvailable: true,
    },
    {
        id: 4,
        name: "Marathi Thali",
        category: "Main Course",
        description:
            "A complete Marathi Thali with a variety of traditional dishes.",
        price: 600,
        imageUrl:
            "https://res.cloudinary.com/kunal047/image/upload/v1703222734/samples/food/fish-vegetables.jpg",
        isAvailable: true,
    },
    {
        id: 5,
        name: "Homemade Cookies",
        category: "Snacks",
        description:
            "Crispy and delicious homemade cookies in various flavors.",
        price: 300,
        imageUrl:
            "https://res.cloudinary.com/kunal047/image/upload/v1703222734/samples/food/fish-vegetables.jpg",
        isAvailable: true,
    },
];

export const categories = [
    { id: 0, name: "All" },
    { id: 1, name: "Cakes" },
    { id: 2, name: "Main Course" },
    { id: 3, name: "Desserts" },
    { id: 4, name: "Snacks" },
];

export const NavItems = [
    {
        id: 1,
        category: "Traditional",
        products: [
            { id: 1, name: "Modak", route: "/traditional/modak" },
            { id: 2, name: "Karanji", route: "/traditional/karanji" },
            { id: 3, name: "Puranpoli", route: "/traditional/puranpoli" },
        ],
    },
    {
        id: 2,
        category: "Healthy",
        products: [
            { id: 4, name: "Dink Ladoo", route: "/healthy/dink-ladoo" },
            { id: 5, name: "Methi Ladoo", route: "/healthy/methi-ladoo" },
            {
                id: 6,
                name: "Dry Fruits Ladoo",
                route: "/healthy/dry-fruits-ladoo",
            },
            { id: 7, name: "Gulkand Karnji", route: "/healthy/gulkand-karnji" },
            {
                id: 8,
                name: "Peanut & Jaggery Ladoo",
                route: "/healthy/peanut-jaggery-ladoo",
            },
        ],
    },
    {
        id: 3,
        category: "Ladoos",
        products: [
            { id: 9, name: "Besan Ladoo", route: "/ladoos/besan-ladoo" },
            { id: 10, name: "Mugdal Ladoo", route: "/ladoos/mugdal-ladoo" },
            { id: 11, name: "Rava Ladoo", route: "/ladoos/rava-ladoo" },
            { id: 12, name: "Alive Ladoo", route: "/ladoos/alive-ladoo" },
            { id: 13, name: "Upawas Ladoo", route: "/ladoos/upawas-ladoo" },
        ],
    },
    {
        id: 4,
        category: "Special Namkeen",
        products: [
            { id: 14, name: "Chakli", route: "/special-namkeen/chakli" },
            {
                id: 15,
                name: "Namkeen Shankarpali (Only Wheat)",
                route: "/special-namkeen/namkeen-shankarpali",
            },
            {
                id: 16,
                name: "Bhadang (Red)",
                route: "/special-namkeen/bhadang-red",
            },
            {
                id: 17,
                name: "Bhadang (Yellow)",
                route: "/special-namkeen/bhadang-yellow",
            },
            {
                id: 18,
                name: "Pudachi Karnji",
                route: "/special-namkeen/pudachi-karnji",
            },
        ],
    },
    {
        id: 5,
        category: "Office Snacking",
        products: [
            { id: 19, name: "Makhana", route: "/office-snacking/makhana" },
            {
                id: 20,
                name: "Chakli Sticks",
                route: "/office-snacking/chakli-sticks",
            },
            {
                id: 21,
                name: "Protein Ladoo",
                route: "/office-snacking/protein-ladoo",
            },
        ],
    },
];
