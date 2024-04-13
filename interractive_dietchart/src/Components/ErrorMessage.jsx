import React from "react";
function ErrorMessage({items}) {
 
  return <>{items.length === 0 && <h3>No items in the List</h3>}</>;
}

export default ErrorMessage;
