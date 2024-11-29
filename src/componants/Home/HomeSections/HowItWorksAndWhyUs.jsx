import React from "react";
import "./HowItWorksAndWhyUs.css";


const HowItWorksAndWhyUs = () => {
  // Data for "How it works" section
  const steps = [
    {
      title: "Schedule a Pickup",
      description: "Choose your preferred date and time.",
      imgSrc: "Imgs/Schedule a Pickup.png", // Replace with your actual image path
    },
    {
      title: "Pickup at your address",
      description: "Our staff picks up your items.",
      imgSrc: "Imgs/pickup-truck.png", // Replace with your actual image path
    },
    {
      title: "Receive Payment",
      description: "Get paid instantly for your items.",
      imgSrc: "Imgs/payment.png", // Replace with your actual image path
    },
  ];

  // Data for "Why us" section
  const features = [
    {
      title: "Best Rates",
      description: "We provide the best value for your scrap.",
      imgSrc: "Imgs/money.png", // Replace with your actual image path
    },
    {
      title: "Convenience",
      description: "Pickup at a convenient time for you.",
      imgSrc: "Imgs/thumb-ups.png", // Replace with your actual image path
    },
    {
      title: "Trust",
      description: "Verified staff ensure safety.",
      imgSrc: "Imgs/trust.png", // Replace with your actual image path
    },
    {
      title: "Eco-friendly",
      description: "We ensure responsible recycling.",
      imgSrc: "Imgs/eco.png", // Replace with your actual image path
    },
  ];

  return (
    <div className="container whyus">
      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>How it works</h2>
        <div className="steps-container">
          {steps.map((step, index) => (
            <div className="step-card" key={index}>
              <img src={step.imgSrc} alt={step.title} className="step-icon" />
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Us Section */}
      <section className="why-us">
        <h2>Why us</h2>
        <div className="features-container">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <img src={feature.imgSrc} alt={feature.title} className="feature-icon" />
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HowItWorksAndWhyUs;
