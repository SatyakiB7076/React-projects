import React from 'react'

function Todo1() {
    let todoName='Buy Milk';
    let todoDate='04/04/2024';
  return (
    <div>
      <div className="row my-3">
          <div className="col-6">
            {todoName}
          </div>
          <div className="col-4">
            {todoDate}
          </div>
          <div className="col-2">
            <button type="button" class="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
    </div>
  )
}

export default Todo1
