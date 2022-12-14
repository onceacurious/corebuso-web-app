import React from "react";
import { Link } from "react-router-dom";

import { Feature } from "../../components";
import "./features.css";

const featuresData = [
  { 
    title: "Eco-Friendly Design",
    text: "Optimizing website by reducing image size. Strategically plan videos. Use lazy loading for images and media. Improve site navigation to find information easier. Choose a green web host. Finally, set up web caching.",
  },
  {
    title: "Search Engine Optimization",
    text: "Guiding clients with a modern and updated step-by-step procedures on implementing SEO like Google Web Master (Google Console). A good site audit help's you understand how search engine index your website.",
  },
  {
    title: "Minimalist",
    text: "A simple yet elegant design structure brings color and flavor to a website. Choose the right design and necessary elements to be used. Meeting the balanced approach, starting from the planning to the building phase, helps the developer decide and implement proper workflow resulting in a rich minimalist website.",
  },
  {
    title: "Consistent Typography",
    text: "Choosing the right font, size, and color palette for a website isn't easy. Strategically planning what typography to use will make your user enjoy their stay on your website while browsing and finding the information they were looking for.",
  },
];

const Features = () => {
  return (
    <div className="cbs__features section__padding" id="features">
      <div className="cbs__features-heading">
        <h2 className="gradient__text">
        Practice the most efficient and effective way of developing a website from scratch without compromising the features and scalability.
        </h2>
        <Link to="/" className="pointer">
          <span>Learn more</span>
        </Link>
      </div>
      <div className="cbs__features-container">
        {featuresData.map((item, index) => (
          <Feature
            key={item.title + index}
            title={item.title}
            text={item.text}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
