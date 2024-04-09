import React from 'react'

function AddTodo() {
  return (
    <div>
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
    </div>
  )
}

export default AddTodo
