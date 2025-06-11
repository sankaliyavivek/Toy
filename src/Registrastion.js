import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Bounce, ToastContainer, toast } from 'react-toastify'


function Registrastion() {
  const [name, setFname] = useState('')
  const [lastname, setLname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setpassword] = useState('')
  var navi = useNavigate();

  const hendelsubmit = (e) => {
    e.preventDefault();

    var data = { name, lastname, email, password }
    var span1 = document.getElementById('span1')
    var span2 = document.getElementById('span2')


    if (name.length <= 2 || lastname.length <= 2) {
      alert("enter min value")
      span1.innerHTML = "enter valid name"
      span2.innerHTML = "enter valid name"

    }

    else {
      fetch("https://sankaliyavivek.github.io/Toy/userdata",
        {
          method: "post",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data)
        }
      )
      toast.success('Registration completed...', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
    });
      navi('/')
    }
  }
  return (
    <div>

      <div className='container p-3'>
        <h2 className='text-center'>Registration Form</h2>

        <div className='d-flex justify-content-center'>

          <div className='text-start'>
            <form onSubmit={hendelsubmit}>
              <div className="mb-3 ">
                <label forhtml="email" className="form-label">First Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => { setFname(e.target.value) }}
                  className="form-control"
                /><span id='span1'></span>
              </div>
              <div className="mb-3 ">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  value={lastname}
                  onChange={(e) => { setLname(e.target.value) }}
                  className="form-control"
                /><span id='span2'></span>
              </div>
              <div className="mb-3">
                <label forhtml="email" className="form-label">Email address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value) }}
                  className="form-control"
                  id="exampleInputEmail1" />
              </div>
              <div className="mb-3 ">
                <label forhtml="Password" className="form-label">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => { setpassword(e.target.value) }}
                  className="form-control"
                  required
                  id="exampleInputPassword1" />
              </div>

              <button type="submit" className="btn btn-primary">Registration</button>
            </form>
          </div>

        </div>
      </div>

      <ToastContainer></ToastContainer>
    </div>
  )
}

export default Registrastion
