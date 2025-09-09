import React, { useState,useEffect } from 'react';
import Menu from './Components/Menu'
import Categories from './Components/Categories'
import menu from "./data"

function App() {
  const [category, setCategory] = useState([]);
  const [activeBtn, setActiveBtn] = useState("All");

  const categories = menu.map((item) => {
    return item.category;
  });

  let setCategoryItem = new Set(categories);

  useEffect(() => {
    setCategory(["All", ...setCategoryItem]);
    
  }, []);
  
  

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories category={category} setCategory={setCategory} activeBtn={activeBtn} setActiveBtn={setActiveBtn}/>
      </section>
      <Menu activeBtn={activeBtn}/>
    </main>
    
  );
}

export default App;




