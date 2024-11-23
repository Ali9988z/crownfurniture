import React from "react";
import css from "../HomeSections/Productcategories.css"




const categories = [
    {
        title: "What we buy in furniture",
        items: [
            { name: "Single Sofa", icon: "🛋️" },
            { name: "Bed", icon: "🛏️" },
            { name: "Full Sofa Set", icon: "🛋️" },
            { name: "Wooden Table", icon: "🪵" },
            { name: "Computer Table", icon: "💻" },
            { name: "Chair", icon: "🪑" },
            { name: "Dressing Table", icon: "🪞" },
            { name: "Bookshelf", icon: "📚" },
            { name: "TV Showcase", icon: "📺" },
        ],
    },
    {
        title: "What we buy in appliances",
        items: [
            { name: "AC", icon: "❄️" },
            { name: "Laptop", icon: "💻" },
            { name: "Kitchen Vent Fan", icon: "🌬️" },
            { name: "Washing Machine", icon: "🧺" },
            { name: "CCTV Camera", icon: "📹" },
            { name: "Printer", icon: "🖨️" },
            { name: "Router", icon: "📡" },
            { name: "Ceiling Fan", icon: "🌬️" },
            { name: "Television", icon: "📺" },
            { name: "Refrigerator", icon: "🧊" },
            { name: "Toaster", icon: "🍞" },
            { name: "Iron Table", icon: "🪑" },
        ],
    },
    {
        title: "We Buy Scrap Too",
        items: [
            { name: "Metals", icon: "🔩" },
            { name: "Plastic", icon: "🧴" },
            { name: "Papers", icon: "📄" },
            { name: "Brass", icon: "🔧" },
            { name: "Copper", icon: "🔗" },
            { name: "Wire", icon: "🔌" },
            { name: "Iron", icon: "🛠️" },
            { name: "Copies / Books", icon: "📚" },
            { name: "Cardboard", icon: "📦" },
            { name: "Steel", icon: "🏗️" },
            { name: "Aluminium", icon: "🔳" },
        ],
    },
];



const Productcategories = () => {
    return (
        <>
            <div className="container category">
                <div className="App ">
                    {categories.map((category, index) => (
                        <div key={index} className="category">
                            <h2>{category.title}</h2>
                            <div className="grid-container">
                                {category.items.map((item, idx) => (
                                    <div key={idx} className="grid-itemcategories">
                                        <div className="icon">{item.icon}</div>
                                        <div className="name">{item.name}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default Productcategories;