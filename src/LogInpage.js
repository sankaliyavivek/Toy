import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserLogin } from './App'
import { Bounce, ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';




function LogInpage() {

    var { setlogname, setlogout } = useContext(UserLogin)

    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')
    const navi = useNavigate();
    const hendelogin = (e) => {

        e.preventDefault();

        fetch('https://sankaliyavivek.github.io/Toy/userdata')
            .then((res) => { return res.json() })
            .then((data) => {

                var jaydeep = data.find((v) => {
                    return v.email == email;
                })

                var jaydeep1 = data.find((s) => {
                    return s.password == password;
                })

                if (email == '' || password.length <= 2) {

                    toast.error("plese fill the data", {
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

                }

                else if (!jaydeep && !jaydeep1) {
                    toast.error("not-valide", {
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

                }

                else if (jaydeep && jaydeep1) {

                    toast.success(`welcome ${jaydeep.lastname}`, {
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

                    setTimeout(() => {
                        navi("/")
                    }, 2000);
                }


                setlogname(jaydeep.lastname)
            })

        setlogout(true)

    }
    return (
        <div>
            {/* <h2>Log In </h2>
            <div className='d-flex justify-content-center text-start '>

                <br></br>
                <form onSubmit={hendelogin}>
                    <div className="mb-3 ">
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

                        />
                    </div>

                    <button type="submit" className="btn btn-primary">logIn</button>
                </form>

                <ToastContainer />

            </div> */}

            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <form className='for'>
                <h3>Login Here</h3>

                <label for="username">Username</label>
                <input type="text"
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
                placeholder="Email " id="username" />

                <label for="password">Password</label>
                <input type="password"
                 placeholder="Password"
                 value={password}
                 onChange={(e) => { setpassword(e.target.value) }} 
                 id="password" />

                <button onClick={hendelogin} style={{marginTop:'10px'}}>Log In</button>
                <div className="social">
                    <div className="go"><i className="fab fa-google"></i>  <a href="https://www.google.co.in/" target='_blank' style={{textDecoration:"none",cursor:'pointer'}}>Google</a></div>
                    <div className="fb"><i className="fab fa-facebook"></i>  <a href="https://x.com/i/flow/login" target='_blank' style={{textDecoration:"none",cursor:'pointer'}}>Tweeter</a></div>
                </div>
            </form>
        </div>
    )
}

export default LogInpage
