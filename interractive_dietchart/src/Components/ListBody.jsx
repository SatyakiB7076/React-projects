import React, { useState } from "react";
import ListItem from "./ListItem";

function ListBody({ items }) {
  const [activeItems, setActiveItems] = useState([]);

  const handleBuyButton = (item) => {
    setActiveItems([...activeItems, item]); 
  };

  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
          <ListItem
            key={item}
            foodItem={item}
            bought={activeItems.includes(item) ? true : false}
            handleBuyButton={() => handleBuyButton(item)} 
          />
        ))}
      </ul>
    </>
  );
}

export default ListBody;
