import React from "react";

import sampleCard from "../public/assets/sampleCard.png";

const ProductCard = () => {
  return (
    <div className="card-body">
      <div className="card-thumbnail-container">
        <img src={sampleCard} className="card-thumbnail" />
      </div>
      <div className="card-author">BASTARD GAN PUNKS V2</div>
      <div className="card-name">BASTARD GAN PUNK V2 #7197</div>
      <div className="card-price">$50,000</div>
    </div>
  );
};

export default ProductCard;
