function App() {
  return (
    <center className="todo-container">
      <h1>TODO App</h1>
      <div className="container text-center">
        <div className="row">
          <div className="col-6">
            <input type="text" placeholder="Enter todo here" />
          </div>
          <div className="col-4">
            <input type="date" />
          </div>
          <div className="col-2">
            <button type="button" class="btn btn-success">
              Add
            </button>
          </div>
        </div>
      
        <div className="row my-3">
          <div className="col-6">
            Buy Milk
          </div>
          <div className="col-4">
            04/04/2024
          </div>
          <div className="col-2">
            <button type="button" class="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
        <div className="row my-3">
          <div className="col-6">
            Watch Anime
          </div>
          <div className="col-4">
            06/04/2024
          </div>
          <div className="col-2">
            <button type="button" class="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </center>
  );
}

export default App;
