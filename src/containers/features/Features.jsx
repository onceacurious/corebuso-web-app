import React from "react";
import "./features.css";
import { Feature } from "../../components";
import { Link } from "react-router-dom";

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
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, illum!",
  },
  {
    title: "Consistent Typography",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, illum!",
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
          <span>Find Out More About Our Products</span>
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
