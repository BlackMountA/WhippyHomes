import React from "react";
import "./styles.scss";

const Feature = (props) => {
  return (
    <div className={props.className}>
      <div className="feature-image__container">
        <img src={props.img} alt="product" />
      </div>
      <p className="feature-text">
        Our platform makes it easy for landlords to manage their properties,
        process rent collections and fill vacancies quickly
      </p>
    </div>
  );
};

export default Feature;
