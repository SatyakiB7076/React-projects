import React from 'react'

function Sidebar() {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar" style={{width: "15%",height: "auto"}}>
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
      <span className="fs-4">Menu</span>
    </a>
    
    <ul className="nav nav-pills flex-column mb-auto my-4">
      <li className="nav-item">
        <a href="#" className="nav-link active" aria-current="page">
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
          Home
        </a>
      </li>
      <li>
        <a href="#" className="nav-link text-white">
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
          Create Post
        </a>
      </li>
      <li>
        <a href="#" className="nav-link text-white">
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#table"></use></svg>
          Contact Us
        </a>
      </li>
    </ul>
    
    
  </div>
  )
}

export default Sidebar
