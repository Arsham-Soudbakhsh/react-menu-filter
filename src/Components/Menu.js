import React, { useState } from "react";
import menu from "../data";

const Menu = ({ activeBtn }) => {
  return (
    <div className="section-center">
      {menu.map(
        (items) =>
          items.category === activeBtn && (
            <article className="menu-item" key={items.id}>
              <img src={items.img} className="photo" />
              <div className="item-info">
                <header>
                  <h4>{items.title}</h4>
                  <h4 className="price">${items.price}</h4>
                </header>
                <p className="item-text">{items.desc}</p>
              </div>
            </article>
          )
      )}
      {menu.map(
        (items) =>
          "All" === activeBtn && (
            <article className="menu-item" key={items.id}>
              <img src={items.img} className="photo" />
              <div className="item-info">
                <header>
                  <h4>{items.title}</h4>
                  <h4 className="price">${items.price}</h4>
                </header>
                <p className="item-text">{items.desc}</p>
              </div>
            </article>
          )
      )}
    </div>
  );
};

export default Menu;
