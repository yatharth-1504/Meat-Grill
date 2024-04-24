import React from "react";
import "./CatageoryCard.scss";

const CatageoryCard = ({ item }) => {
  return (
    // <Link className="link" to={`/product/${item.id}`}>
    <div className="categorycard">
      <div className="image" >
        <img
          src={
            item.img
          }
          alt=""
          className="mainImg"
        />
      </div>
    </div>
  );
};

export default CatageoryCard;
