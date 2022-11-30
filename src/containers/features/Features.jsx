import React from "react";
import "./features.css";
import { Feature } from "../../components";
import { Link } from "react-router-dom";

const featuresData = [
  {
    title: "Eco-Friendly Design",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, illum!",
  },
  {
    title: "Search Engine Optimization",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, illum!",
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
        <h1 className="gradient__text">
          Be the first to avail of our modern, affordable, and responsive
          website templates, created by an expert just for you.
        </h1>
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
