import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./form.css"
function Form() {
  return (
    
    <div className="container">
    <h1 className='title'> Sign up  </h1>
    <form className="row g-3 form">
  <div className="col-md-6">
    <label for="inputEmail4" className="form-label">Email</label>
    <input type="email" className="form-control" id="inputEmail4" placeholder='example@emil.com'></input>
  </div>
  <div className="col-md-6">
    <label for="inputPassword4" className="form-label">Password</label>
    <input type="password" className="form-control" id="inputPassword4" placeholder='Password'></input>
  </div>
  <div className="col-12">
    <label for="inputAddress" className="form-label">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"></input>
  </div>
  <div className="col-12">
    <label for="inputAddress2" className="form-label">Address 2</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"></input>
  </div>
  <div className="col-md-6">
    <label for="inputCity" className="form-label" >City</label>
    <input type="text" className="form-control" id="inputCity" placeholder='City'></input>
  </div>
  <div className="col-md-6">
    <label for="inputState" className="form-label">Country</label>
    <select id="inputState" className="form-select">
      <option selected>Choose...</option>
      <option >Tunisia</option>
      <option>Algeria</option>
      <option >Austria</option>
      <option >Belgium</option>
      <option >France</option>

    </select>
  </div>
  
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"></input>
      <label className="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-primary">Sign in</button>
  </div>
</form></div>
  )
}

export default Form
