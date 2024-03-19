"use strict";
// // Create categories function
// const createCategories = async () => {
//     const prisma = new PrismaClient();
Object.defineProperty(exports, "__esModule", { value: true });
exports.services = void 0;
//     for (const service of services) {
//         await prisma.service.create({
//             data: service,
//         });
//     }
//     prisma.$disconnect();
// };
// // Call the createCategories function to create categories
// createCategories()
//     .then(() => {
//         console.log("services created successfully.");
//     })
//     .catch((error) => {
//         console.error("Error creating services:", error);
//     });
// Call the createCategories function to create categories
// createCategories()
//     .then(() => {
//         console.log("services created successfully.");
//     })
//     .catch((error) => {
//         console.error("Error creating services:", error);
//     });
exports.services = [
    // Appliance Installation
    {
        title: "Professional Appliance Installation",
        description: "Our experts will ensure the safe and precise installation of your appliances, so you don't have to worry about a thing.",
        price: 50.0,
        image: ["appliance1.jpg", "appliance2.jpg"],
        categoryId: "19d8ecab-a66b-48f8-ba5c-a644f24be47a",
    },
    {
        title: "Dishwasher Installation",
        description: "We specialize in dishwasher installation, making your kitchen chores easier and more efficient.",
        price: 60.0,
        image: ["dishwasher1.jpg", "dishwasher2.jpg"],
        categoryId: "19d8ecab-a66b-48f8-ba5c-a644f24be47a",
    },
    {
        title: "Oven and Stove Setup",
        description: "Let us handle the installation of your oven and stove, ensuring they work flawlessly from day one.",
        price: 70.0,
        image: ["oven1.jpg", "stove1.jpg"],
        categoryId: "19d8ecab-a66b-48f8-ba5c-a644f24be47a",
    },
    {
        title: "Refrigerator Connection",
        description: "We'll connect your refrigerator properly, so your food stays fresh and your drinks stay cold.",
        price: 80.0,
        image: ["fridge1.jpg", "fridge2.jpg"],
        categoryId: "19d8ecab-a66b-48f8-ba5c-a644f24be47a",
    },
    {
        title: "Washing Machine Setup",
        description: "For hassle-free laundry days, trust us to set up your washing machine to perfection.",
        price: 90.0,
        image: ["washer1.jpg", "washer2.jpg"],
        categoryId: "19d8ecab-a66b-48f8-ba5c-a644f24be47a",
    },
    // Construction
    {
        title: "Full House Renovation",
        description: "Transform your entire home with our comprehensive house renovation service. From flooring to roofing, we do it all.",
        price: 100.0,
        image: ["renovation1.jpg", "renovation2.jpg"],
        categoryId: "54ed37f6-287e-44dc-8661-75ba547c1381",
    },
    {
        title: "Bathroom Remodeling",
        description: "Upgrade your bathroom with our remodeling service. Get a spa-like experience in your own home.",
        price: 110.0,
        image: ["bathroom1.jpg", "bathroom2.jpg"],
        categoryId: "54ed37f6-287e-44dc-8661-75ba547c1381",
    },
    {
        title: "Kitchen Renovation",
        description: "Cook and entertain in style with a beautifully renovated kitchen. We'll make your culinary dreams come true.",
        price: 120.0,
        image: ["kitchen1.jpg", "kitchen2.jpg"],
        categoryId: "54ed37f6-287e-44dc-8661-75ba547c1381",
    },
    {
        title: "Room Additions",
        description: "Need extra space? Our room addition service ensures you have more room for work, play, and relaxation.",
        price: 130.0,
        image: ["addition1.jpg", "addition2.jpg"],
        categoryId: "54ed37f6-287e-44dc-8661-75ba547c1381",
    },
    {
        title: "Roof Repair and Installation",
        description: "Protect your home from the elements with our roof repair and installation service. We've got you covered.",
        price: 140.0,
        image: ["roof1.jpg", "roof2.jpg"],
        categoryId: "54ed37f6-287e-44dc-8661-75ba547c1381",
    },
    // Interior Design
    {
        title: "Contemporary Interior Design",
        description: "Experience the elegance of contemporary interior design with our expert decorators. Create a stylish living space.",
        price: 150.0,
        image: ["contemporary1.jpg", "contemporary2.jpg"],
        categoryId: "44d9c572-3761-43c6-95dc-00ba09fc7c38",
    },
    {
        title: "Classic Interior Design",
        description: "Transform your home with classic interior design. Timeless elegance and sophistication await.",
        price: 160.0,
        image: ["classic1.jpg", "classic2.jpg"],
        categoryId: "44d9c572-3761-43c6-95dc-00ba09fc7c38",
    },
    {
        title: "Minimalist Interior Design",
        description: "Simplify and declutter your space with minimalist interior design. Enjoy clean lines and a calming atmosphere.",
        price: 170.0,
        image: ["minimalist1.jpg", "minimalist2.jpg"],
        categoryId: "44d9c572-3761-43c6-95dc-00ba09fc7c38",
    },
    {
        title: "Eclectic Interior Design",
        description: "Mix and match styles with eclectic interior design. Express your unique personality through your decor.",
        price: 180.0,
        image: ["eclectic1.jpg", "eclectic2.jpg"],
        categoryId: "44d9c572-3761-43c6-95dc-00ba09fc7c38",
    },
    {
        title: "Bohemian Interior Design",
        description: "Embrace free-spirited and colorful Bohemian interior design. Create a vibrant and cozy living space.",
        price: 190.0,
        image: ["bohemian1.jpg", "bohemian2.jpg"],
        categoryId: "44d9c572-3761-43c6-95dc-00ba09fc7c38",
    },
    // Electrical
    {
        title: "Electrical Wiring and Repair",
        description: "For safe and reliable electrical solutions, count on our team. We handle wiring and repairs with care.",
        price: 200.0,
        image: ["electrical1.jpg", "electrical2.jpg"],
        categoryId: "25e7f142-34c4-4843-bcf2-d67c3112280b",
    },
    {
        title: "Lighting Installation",
        description: "Illuminate your home with our expert lighting installation service. Create the perfect ambiance.",
        price: 210.0,
        image: ["lighting1.jpg", "lighting2.jpg"],
        categoryId: "25e7f142-34c4-4843-bcf2-d67c3112280b",
    },
    {
        title: "Electrical Panel Upgrade",
        description: "Ensure your home's electrical panel can handle your needs. We provide safe and efficient upgrades.",
        price: 220.0,
        image: ["panel1.jpg", "panel2.jpg"],
        categoryId: "25e7f142-34c4-4843-bcf2-d67c3112280b",
    },
    {
        title: "Outlet and Switch Replacement",
        description: "Replace old outlets and switches with new ones. Our electricians make your home safer and more functional.",
        price: 230.0,
        image: ["outlet1.jpg", "outlet2.jpg"],
        categoryId: "25e7f142-34c4-4843-bcf2-d67c3112280b",
    },
    {
        title: "Ceiling Fan Installation",
        description: "Stay cool in summer and warm in winter with a ceiling fan. We'll install it quickly and efficiently.",
        price: 240.0,
        image: ["fan1.jpg", "fan2.jpg"],
        categoryId: "25e7f142-34c4-4843-bcf2-d67c3112280b",
    },
    // Plumbing
    {
        title: "Leak Detection and Repair",
        description: "Don't let leaks ruin your day. Our plumbing experts detect and repair leaks quickly.",
        price: 250.0,
        image: ["leak1.jpg", "leak2.jpg"],
        categoryId: "af1f19c1-b00b-45af-a6d0-f6eadb8caa8b",
    },
    {
        title: "Toilet Installation and Repair",
        description: "We take care of all your toilet needs, from installation to repairs. Enjoy a perfectly functioning toilet.",
        price: 260.0,
        image: ["toilet1.jpg", "toilet2.jpg"],
        categoryId: "af1f19c1-b00b-45af-a6d0-f6eadb8caa8b",
    },
    {
        title: "Faucet Replacement",
        description: "Upgrade your faucets for improved water flow and a fresh look. Our experts handle replacements with ease.",
        price: 270.0,
        image: ["faucet1.jpg", "faucet2.jpg"],
        categoryId: "af1f19c1-b00b-45af-a6d0-f6eadb8caa8b",
    },
    {
        title: "Pipe and Drain Cleaning",
        description: "Keep your pipes and drains clear of clogs and debris. Our cleaning service ensures smooth water flow.",
        price: 280.0,
        image: ["pipe1.jpg", "pipe2.jpg"],
        categoryId: "af1f19c1-b00b-45af-a6d0-f6eadb8caa8b",
    },
    {
        title: "Hot Water Heater Installation",
        description: "Enjoy hot showers and baths with our water heater installation. Say goodbye to cold water.",
        price: 290.0,
        image: ["heater1.jpg", "heater2.jpg"],
        categoryId: "af1f19c1-b00b-45af-a6d0-f6eadb8caa8b",
    },
    // Lighting
    {
        title: "Lighting Installation",
        description: "Illuminate your home with our expert lighting installation service. Create the perfect ambiance.",
        price: 210.0,
        image: ["lighting1.jpg", "lighting2.jpg"],
        categoryId: "f851d34e-4494-4dc3-ac5f-909b8f8e56de",
    },
    // ... (other Lighting services)
];
