import React from "react";

function Todo1() {
  let todoName = "Buy Milk";
  let todoDate = "04/04/2024";
  return (
    <div className="row kg-row">
      <div className="col-6">{todoName}</div>
      <div className="col-4">{todoDate}</div>
      <div className="col-2">
        <button type="button" class="btn btn-danger kg-button">
          Delete
        </button>
      </div>
    </div>
  );
}
function Todo2() {
  let todoName = "Watch Anime";
  let todoDate = "06/04/2024";
  return (
    <div className="row kg-row">
      <div className="col-6">{todoName}</div>
      <div className="col-4">{todoDate}</div>
      <div className="col-2">
        <button type="button" class="btn btn-danger kg-button">
          Delete
        </button>
      </div>
    </div>
  );
}

export { Todo1, Todo2 };
