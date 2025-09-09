import React, { useEffect, useState } from "react";


const Categories = ({category,activeBtn,setActiveBtn}) => {


  return (
    <div className="btn-container">
      {category.map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => setActiveBtn(item)}
          // highlight class  for highlight main category
          className={`filter-btn ${activeBtn === item ? "highlight" : ""}`}
        >
          {item}
        </button>
      ))}
      <button
        type="button"
        // highlight class  for highlight main category
        className="filter-btn"
      ></button>
    </div>
  );
};

export default Categories;
