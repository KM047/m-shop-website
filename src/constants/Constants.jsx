export const categoryByProducts = [
    {
        id: 1,
        category: "Traditional",
        description:
            "Savor the rich flavors of our timeless, traditional delights.",
        imageUrl:
            "https://res.cloudinary.com/kunal047/image/upload/v1722539037/M-Shop/Hero%20section%20images/r8kqruhb18yj2rt4hnax.png",

        categoryTheme:
            "bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500",
        products: [
            {
                id: 1,
                name: "Modak",
                route: "traditional/modak",
                description: "Traditional sweet dumpling",
                price: 35,
                imageUrl: [
                    "https://res.cloudinary.com/kunal047/image/upload/v1703222734/samples/food/fish-vegetables.jpg",
                ],
                perItem: true,
                isAvailable: true,
                category: "Traditional",
            },
            {
                id: 2,
                name: "Karanji",
                route: "traditional/karanji",
                description: "Deep fried sweet dumpling",
                price: 480,
                imageUrl: [
                    "https://res.cloudinary.com/kunal047/image/upload/v1703222734/samples/food/fish-vegetables.jpg",
                ],
                isAvailable: true,
                category: "Traditional",
            },
            {
                id: 3,
                name: "Puranpoli",
                route: "traditional/puranpoli",
                description: "Stuffed sweet flatbread",
                price: 30,
                imageUrl: [
                    "https://res.cloudinary.com/kunal047/image/upload/v1703222734/samples/food/fish-vegetables.jpg",
                ],
                perItem: true,
                isAvailable: true,
                category: "Traditional",
            },
        ],
    },
    {
        id: 2,
        category: "Healthy",
        description: "Indulge guilt-free with our wholesome, healthy treats.",
        imageUrl:
            "https://res.cloudinary.com/kunal047/image/upload/v1722539036/M-Shop/Hero%20section%20images/hbxjyhwxhlhhxkt01vnv.png",
        categoryTheme:
            "bg-gradient-to-r from-green-300 via-green-400 to-green-500",
        products: [
            {
                id: 4,
                name: "Dink Ladoo",
                route: "healthy/dink-ladoo",
                description: "Ladoo made with edible gum",
                price: 600,
                imageUrl: [
                    "https://res.cloudinary.com/kunal047/image/upload/v1720203192/M-Shop/4%20Dink%20Ladoo/pg7jrq8jabczlgckkhtv.jpg",
                ],
                isAvailable: true,
                category: "Healthy",
            },
            {
                id: 5,
                name: "Methi Ladoo",
                route: "healthy/methi-ladoo",
                description: "Ladoo made with fenugreek",
                price: 650,
                imageUrl: [
                    "https://res.cloudinary.com/kunal047/image/upload/v1720203770/M-Shop/5%20Methi%20Ladoo/y8mfqdlurilpao3xzzfc.jpg",
                    "https://res.cloudinary.com/kunal047/image/upload/v1720203767/M-Shop/5%20Methi%20Ladoo/p0ijqssqkstjxjseh6hg.jpg",
                ],
                isAvailable: true,
                category: "Healthy",
            },
            {
                id: 6,
                name: "Dry Fruits Ladoo",
                route: "healthy/dry-fruits-ladoo",
                description: "Ladoo made with dry fruits",
                price: 850,
                imageUrl: [
                    "https://res.cloudinary.com/kunal047/image/upload/v1703222734/samples/food/fish-vegetables.jpg",
                ],
                isAvailable: true,
                category: "Healthy",
            },
            {
                id: 7,
                name: "Gulkand Karanji",
                route: "healthy/gulkand-karanji",
                description: "Sweet dumpling with rose petal jam",
                price: 420,
                imageUrl: [
                    "https://res.cloudinary.com/kunal047/image/upload/v1703222734/samples/food/fish-vegetables.jpg",
                ],
                isAvailable: true,
                category: "Healthy",
            },
            {
                id: 8,
                name: "Peanut Jaggery Ladoo",
                route: "healthy/peanut-jaggery-ladoo",
                description: "Ladoo made with peanuts and jaggery",
                price: 300,
                imageUrl: [
                    "https://res.cloudinary.com/kunal047/image/upload/v1703222734/samples/food/fish-vegetables.jpg",
                ],
                isAvailable: true,
                category: "Healthy",
            },
        ],
    },
    {
        id: 3,
        category: "Ladoos",
        description:
            "Experience the joy of festivities with our vibrant, delicious ladoos.",
        imageUrl:
            "https://res.cloudinary.com/kunal047/image/upload/v1722539037/M-Shop/Hero%20section%20images/ws3nfiuuacasknnvd0gz.png",
        categoryTheme:
            "bg-gradient-to-r from-yellow-300 via-orange-400 to-orange-500",
        products: [
            {
                id: 9,
                name: "Besan Ladoo",
                route: "ladoos/besan-ladoo",
                description: "Ladoo made with chickpea flour",
                price: 500,
                imageUrl: [
                    "https://res.cloudinary.com/kunal047/image/upload/v1720203556/M-Shop/9%20Besan%20Ladoo/if3h9mdrfgmtntknlxpc.jpg",
                    "https://res.cloudinary.com/kunal047/image/upload/v1720203556/M-Shop/9%20Besan%20Ladoo/m0fbhginpv1ike4ubodr.jpg",
                ],
                isAvailable: true,
                category: "Ladoos",
            },
            {
                id: 10,
                name: "Mugdal Ladoo",
                route: "ladoos/mugdal-ladoo",
                description: "Ladoo made with mung beans",
                price: 600,
                imageUrl: [
                    "https://res.cloudinary.com/kunal047/image/upload/v1703222734/samples/food/fish-vegetables.jpg",
                ],
                isAvailable: true,
                category: "Ladoos",
            },
            {
                id: 11,
                name: "Rava Ladoo",
                route: "ladoos/rava-ladoo",
                description: "Ladoo made with semolina",
                price: 350,
                imageUrl: [
                    "https://res.cloudinary.com/kunal047/image/upload/v1720203432/M-Shop/11%20Rava%20Ladoo/ghifmiubzb9xny4dhjij.jpg",
                    "https://res.cloudinary.com/kunal047/image/upload/v1720203405/M-Shop/11%20Rava%20Ladoo/exlvrwgijwfkxwflb1hh.jpg",
                ],
                isAvailable: true,
                category: "Ladoos",
            },
            {
                id: 12,
                name: "Aliv Ladoo",
                route: "ladoos/aliv-ladoo",
                description: "Ladoo made with watercress seeds",
                price: 300,
                imageUrl: [
                    "https://res.cloudinary.com/kunal047/image/upload/v1703222734/samples/food/fish-vegetables.jpg",
                ],
                isAvailable: true,
                category: "Ladoos",
            },
            {
                id: 13,
                name: "Upawas Ladoo",
                route: "ladoos/upawas-ladoo",
                description: "Fasting ladoo",
                price: 300,
                imageUrl: [
                    "https://res.cloudinary.com/kunal047/image/upload/v1703222734/samples/food/fish-vegetables.jpg",
                ],
                isAvailable: true,
                category: "Ladoos",
            },
        ],
    },
    {
        id: 4,
        category: "Special Namkeen",
        description:
            "Spice up your moments with our exquisite, special namkeen.",
        imageUrl:
            "https://res.cloudinary.com/kunal047/image/upload/v1722539038/M-Shop/Hero%20section%20images/y18cxeukltqykwx79vws.png",
        categoryTheme:
            "bg-gradient-to-r from-orange-500 via-red-400 to-red-600",
        products: [
            {
                id: 14,
                name: "Chakli",
                route: "special-namkeen/chakli",
                description: "Spiral-shaped crispy snack",
                price: 480,
                imageUrl: [
                    "https://res.cloudinary.com/kunal047/image/upload/v1703222734/samples/food/fish-vegetables.jpg",
                ],
                isAvailable: true,
                category: "Special Namkeen",
            },
            {
                id: 15,
                name: "Namkeen Shankarpali",
                route: "special-namkeen/namkeen-shankarpali",
                description: "Crunchy savory snack",
                price: 480,
                imageUrl: [
                    "https://res.cloudinary.com/kunal047/image/upload/v1703222734/samples/food/fish-vegetables.jpg",
                ],
                isAvailable: true,
                category: "Special Namkeen",
            },
            {
                id: 16,
                name: "Bhadang (Red)",
                route: "special-namkeen/bhadang-red",
                description: "Spicy puffed rice",
                price: 420,
                imageUrl: [
                    "https://res.cloudinary.com/kunal047/image/upload/v1703222734/samples/food/fish-vegetables.jpg",
                ],
                isAvailable: true,
                category: "Special Namkeen",
            },
            {
                id: 17,
                name: "Bhadang (Yellow)",
                route: "special-namkeen/bhadang-yellow",
                description: "Savory puffed rice",
                price: 420,
                imageUrl: [
                    "https://res.cloudinary.com/kunal047/image/upload/v1703222734/samples/food/fish-vegetables.jpg",
                ],
                isAvailable: true,
                category: "Special Namkeen",
            },
            {
                id: 18,
                name: "Pudachi Karanji",
                route: "special-namkeen/pudachi-karanji",
                description: "Fried dumpling with coconut filling",
                price: 600,
                imageUrl: [
                    "https://res.cloudinary.com/kunal047/image/upload/v1720203462/M-Shop/18%20Pudachi%20Karanji/fvpscgonkegbpfqrwkwe.jpg",
                    "https://res.cloudinary.com/kunal047/image/upload/v1720203458/M-Shop/18%20Pudachi%20Karanji/sv7iytagxdth9jhzlsd3.jpg",
                ],
                isAvailable: true,
                category: "Special Namkeen",
            },
            {
                id: 151,
                name: "Sweet Shankarpali",
                route: "special-namkeen/sweet-shankarpali",
                description:
                    "Enjoy the crispy, savory delight of Sweet Shankarpali.",
                price: 480,
                imageUrl: [
                    "https://res.cloudinary.com/kunal047/image/upload/v1703222734/samples/food/fish-vegetables.jpg",
                ],
                isAvailable: true,
                category: "Special Namkeen",
            },
            {
                id: 152,
                name: "Anarase",
                route: "special-namkeen/anarase",
                description:
                    "Savor the unique crunch and flavor of traditional Anarase.",
                price: 550,
                imageUrl: [
                    "https://res.cloudinary.com/kunal047/image/upload/v1703222734/samples/food/fish-vegetables.jpg",
                ],
                isAvailable: true,
                category: "Special Namkeen",
            },
            {
                id: 153,
                name: "Chirote",
                route: "special-namkeen/chirote",
                description:
                    "Delight in the crispy and flavorful treat of Chirote.",
                price: 480,
                imageUrl: [
                    "https://res.cloudinary.com/kunal047/image/upload/v1703222734/samples/food/fish-vegetables.jpg",
                ],
                isAvailable: true,
                category: "Special Namkeen",
            },
        ],
    },
    {
        id: 5,
        category: "Office Snacking",
        description: "Elevate your break time with our perfect office snacks.",
        imageUrl:
            "https://res.cloudinary.com/kunal047/image/upload/v1722539036/M-Shop/Hero%20section%20images/wwtaeyaw02k0w695qhvv.png",
        categoryTheme:
            "bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500",
        products: [
            {
                id: 19,
                name: "Makhana",
                route: "office-snacking/makhana",
                description: "Roasted fox nuts",
                price: 300,
                imageUrl: [
                    "https://res.cloudinary.com/kunal047/image/upload/v1703222734/samples/food/fish-vegetables.jpg",
                ],
                isAvailable: true,
                category: "Office Snacking",
            },
            {
                id: 20,
                name: "Chakli Sticks",
                route: "office-snacking/chakli-sticks",
                description: "Crispy snack sticks",
                price: 300,
                imageUrl: [
                    "https://res.cloudinary.com/kunal047/image/upload/v1703222734/samples/food/fish-vegetables.jpg",
                ],
                isAvailable: true,
                category: "Office Snacking",
            },
            {
                id: 21,
                name: "Protein Ladoo",
                route: "office-snacking/protein-ladoo",
                description: "High-protein energy balls",
                price: 300,
                imageUrl: [
                    "https://res.cloudinary.com/kunal047/image/upload/v1703222734/samples/food/fish-vegetables.jpg",
                ],
                isAvailable: true,
                category: "Office Snacking",
            },
        ],
    },
];

export const footerItems = [
    {
        id: 1,
        name: "Home",
        route: "/",
    },
    {
        id: 2,
        name: "Products",
        route: "/products",
    },
    {
        id: 3,
        name: "About us",
        route: "/about",
    },
];
