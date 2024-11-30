import React from "react";
import "../Home/HomeSections/ScrapRates.css"; 



const normalRecyclables = [
  { icon: "📄", price: "Rs 14/KG", title: "OFFICE PAPER (A3/A4)" },
  { icon: "📰", price: "Rs 14/KG", title: "NEWSPAPER **MARKET RATES DROPPED RECENTLY" },
  { icon: "📚", price: "Rs 12/KG", title: "COPIES/BOOKS" },
  { icon: "📦", price: "Rs 8/KG", title: "CARDBOARD **TO GET QUOTE FOR BULK QTY. " },
  { icon: "🥤", price: "Rs 8/KG", title: "PET BOTTLES/ OTHER PLASTIC" },
  { icon: "🛠", price: "Rs 26/KG", title: "IRON **TO GET QUOTE FOR BULK QTY. " },
  { icon: "🍴", price: "Rs 40/KG", title: "STEEL UTENSILS" },
  { icon: "🥄", price: "Rs 105/KG", title: "ALUMINIUM" },
  { icon: "🔗", price: "Rs 305/KG", title: "BRASS" },
  { icon: "🧵", price: "Rs 425/KG", title: "COPPER" },
];


const largeAppliances = [
  { icon: "❄️", price: "Rs 4350/PIECE", title: "SPLIT AC COPPER COIL 1.5 TON (INDOOR + OUTDOOR)" },
  { icon: "🔧", price: "Rs 4150/PIECE", title: "WINDOW AC 1.5 TON (COPPER COIL)" },
  { icon: "❄️", price: "Rs 3500/PIECE", title: "SPLIT/WINDOW AC 1 TON (COPPER COIL)" },
  { icon: "❄️", price: "Rs 5600/PIECE", title: "WINDOW/SPLIT AC 2 TON (COPPER COIL)" },
  { icon: "🧺", price: "Rs 1500/PIECE", title: "FRONT LOAD FULLY AUTOMATIC WASHING MACHINE" },
  { icon: "🧺", price: "Rs 1000/PIECE", title: "TOP LOAD FULLY AUTOMATIC WASHING MACHINE" },
  { icon: "🧺", price: "Rs 1000/PIECE", title: "SEMI AUTOMATIC WASHING MACHINE (DOUBLE DRUM)" },
  { icon: "🔥", price: "Rs 20/KG", title: "GEYSER" },
  { icon: "❄️", price: "Rs 1100/PIECE", title: "SINGLE DOOR FRIDGE" },
  { icon: "❄️", price: "Rs 1350/PIECE", title: "DOUBLE DOOR FRIDGE" },
  { icon: "🔄", price: "Rs 31/KG", title: "COOLING FAN" },
  { icon: "🔄", price: "Rs 15/KG", title: "EXHAUST FAN" },
];


const smallAppliances = [
  { icon: "🖨️", price: "Rs 20/KG", title: "PRINTER/SCANNER/FAX MACHINE" },
  { icon: "🛠️", price: "Rs 15/KG", title: "PLASTIC E-WASTE" },
  { icon: "⚙️", price: "Rs 30/KG", title: "METAL E-WASTE" },
  { icon: "📺", price: "Rs 200/PIECE", title: "CRT TV" },
  { icon: "🌬️", price: "Rs 40/KG", title: "CEILING FAN" },
  { icon: "🔌", price: "Rs 35/KG", title: "MOTORS (COPPER WIRING)" },
  { icon: "🍲", price: "Rs 350/PIECE", title: "MICROWAVE" },
  { icon: "🔋", price: "Rs 180/PIECE", title: "UPS" },
  { icon: "💡", price: "Rs 42/KG", title: "INVERTER/STABILIZER (COPPER COIL)" },
  { icon: "⚡", price: "Rs 81/KG", title: "BATTERY (USED WITH INVERTERS)" },
];


const mobilesAndComputers = [
  { icon: "💻", price: "Rs 300/PIECE", title: "SCRAP LAPTOP" },
  { icon: "🖥️", price: "Rs 150/PIECE", title: "CRT MONITOR" },
  { icon: "🖥️", price: "Rs 20/KG", title: "LCD MONITOR" },
  { icon: "🖥️", price: "Rs 200/PIECE", title: "COMPUTER CPU" },
];


const others = [
  { icon: "🏍️", price: "Rs 2100/PIECE", title: "BIKE" },
  { icon: "🚗", price: "Rs 20000/PIECE", title: "CAR" },
];


const RecyclablesCard = ({ icon, price, title }) => {
  return (
    <div className="card">
      <div className="icon">{icon}</div>
      <div className="price">{price}</div>
      <div className="title">{title}</div>
    </div>
  );
};

// ScrapRates Component
const ScrapRates = () => {
  return (
    <div className="ScrapRates container">
      {/* Normal Recyclables Section */}
      <h2 className="rates-heading"> Normal Recyclables</h2>
      <div className="grid">
        {normalRecyclables.map((item, index) => (
          <RecyclablesCard key={index} {...item} />
        ))}
      </div>

      {/* Large Appliances Section */}
      <h2 className="rates-heading">Large Appliances</h2>
      <div className="grid">
        {largeAppliances.map((item, index) => (
          <RecyclablesCard key={index} {...item} />
        ))}
      </div>

      {/* Small Appliances Section */}
      <h2 className="rates-heading">Small Appliances</h2>
      <div className="grid">
        {smallAppliances.map((item, index) => (
          <RecyclablesCard key={index} {...item} />
        ))}
      </div>

      {/* Mobiles & Computers Section */}
      <h2>Mobiles & Computers</h2>
      <div className="grid">
        {mobilesAndComputers.map((item, index) => (
          <RecyclablesCard key={index} {...item} />
        ))}
      </div>

      {/* Others Section */}
      <h2>Others</h2>
      <div className="grid">
        {others.map((item, index) => (
          <RecyclablesCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ScrapRates;
