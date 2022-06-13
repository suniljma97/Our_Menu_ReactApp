const menuitems = [
    {
        id: 1, menuname: "Tart",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Raspberry_tart.jpg/330px-Raspberry_tart.jpg",
        description: "A tart is a baked dish consisting of a filling over a pastry base with an open top not covered with pastry. ",
        type: "breakfast", price: 23,
    },
    {
        id: 2, menuname: "Pistachio Milkshake",
        img: "https://i.ndtvimg.com/i/2016-11/m_620x350_51480077647.jpg",
        description: "A tall glass of peppy pistachio shake topped with ice.",
        type: "shakes", price: 15,
    },
    {
        id: 3, menuname: "Banana Milkshake",
        img: "https://i.ndtvimg.com/i/2016-11/m_620x350_61480077691.jpg",
        description: "Cream and vanilla essence adds that extra delight to this banana shake",
        type: "shakes", price: 13,
    },
    
    {
        id: 4, menuname: "Chocolate-Strawberry",
        img: "https://www.crazymasalafood.com/wp-content/images/chocolate-strawberry.png",
        description: "Blend one scoop of chocolate ice cream and one scoop of strawberry ice cream",
        type: "shakes", price: 14,
    },
    {
        id: 5, menuname: "Granola",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Granola%2C_yogurt%2C_fruit._%2816696981528%29.jpg/330px-Granola%2C_yogurt%2C_fruit._%2816696981528%29.jpg",
        description: "A bowl of granola served with yogurt",
        type: "breakfast", price: 15,
    },
    {
        id: 6, menuname: "Sandwiches",
        img: "https://blogs.transparent.com/english/wp-content/uploads/sites/31/2018/05/DSC04586.jpg",
        description: "A New Orleans po boy sandwich.",
        type: "lunch", price: 20,
    },

    {
        id: 7, menuname: "Pancake",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Blueberry_pancakes_%283%29.jpg/330px-Blueberry_pancakes_%283%29.jpg",
        description: "A stack of blueberry pancakes",
        type: "breakfast", price: 20,
    },

    {
        id: 8, menuname: "Soup & Salad",
        img: "https://blogs.transparent.com/english/wp-content/uploads/sites/31/2018/05/DSC03050.jpg",
        description: "A delicious southwest chicken salad.",
        type: "lunch", price: 25,
    },
    {
        id: 9, menuname: "Fast Food",
        img: "https://blogs.transparent.com/english/wp-content/uploads/sites/31/2018/05/DSC02275.jpg",
        description: "In'N Out is one of my favorite fast food places.",
        type: "lunch", price: 30,
    },
    {
        id: 10, menuname: "Strudel",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Strudel.jpg/330px-Strudel.jpg",
        description: "Apple strudel made in the Czech Republic",
        type: "breakfast", price: 18,
    },
    {
        id: 11, menuname: "French toast",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/FrenchToast.JPG/330px-FrenchToast.JPG",
        description: "French toast served at a restaurant",
        type: "brekfast", price: 13,
    },
    {
        id: 12, menuname: "Brunch",
        img: "https://blogs.transparent.com/english/wp-content/uploads/sites/31/2018/05/DSC02876.jpg",
        description: "Mmm… Eggs Benedict!",
        type: "lunch", price: 35,
    },
    {
        id: 13, menuname: "Milkshake",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Strawberry_milk_shake_%28cropped%29.jpg/330px-Strawberry_milk_shake_%28cropped%29.jpg",
        description: "A strawberry milkshake topped with a strawberry",
        type: "shakes", price: 20,
    },

    {
        id: 14, menuname: "Butterscotch Milkshake",
        img: "https://www.crazymasalafood.com/wp-content/images/butterscoth.jpg",
        description: "Blend one scoop of butterscotch ice cream and a half cup of milk",
        type: "shakes",
        price: 26,
    },
    {
        id: 15, menuname: "Egg as food",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Eggs%2C_parmesan_and_carrots_with_cream.jpeg/450px-Eggs%2C_parmesan_and_carrots_with_cream.jpeg",
        description: "Fried eggs with carrot, Parmesan and cream",
        type: "breakfast", price: 30,
    },

    {
        id: 16, menuname: "Danish pastry",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Glazed_apple_Danish.jpg/330px-Glazed_apple_Danish.jpg",
        description: "A typical Spandauer-type Danish with apple filling and glazing",
        type: "breakfast", price: 25,
    },
]
export function getMenus() {
    return menuitems;
}