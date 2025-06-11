import React, { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Navbars from './Navbars';
import RelatedProducts from './RelatedProducts';
import Subscribe from './Subscribe';
import Footer from './Footer';
import { UserLogin } from './App';
import Top from './Top';
import { Bounce, ToastContainer, toast } from 'react-toastify';


function View1() {

  const { eid } = useParams();

  const [jay1, setjay] = useState('');
  var { logout } = useContext(UserLogin)
  var { val, setval } = useContext(UserLogin)

  var nil = jay1

  var nil = { id: jay1.id, url: jay1.url, name: jay1.name, price: jay1.price * val }

  useEffect(() => {
    fetch('https://sankaliyavivek.github.io/Toy/alltoys/' + eid)
      .then((res) => { return res.json() })
      .then((vivek) => {
        setjay(vivek)
      })
  }, [])

  console.log(jay1.id)


  let enterdata = () => {

    fetch("")

    fetch("https://sankaliyavivek.github.io/Toy/cart")
      .then((res) => { return res.json() })
      .then((op) => {
        console.log(op)

        let data = op.find((v) => {
          return v.id == jay1.id
        })

        console.log(data)


        if (!logout) {
          // alert("login first")
          toast.info('login first', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
        }

        else if (data) {
          return alert("your data is aleredy exit...")
        }

        else {
          fetch("https://sankaliyavivek.github.io/Toy/cart", {
            method: "post",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(nil)
          })

          // alert("Added...")
          toast.success('Added...!', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
            });

          window.location.reload();

        }
      })

  }


  return (
    <div>
      <Top></Top>
      <Navbars></Navbars>
      <div className='container'>
        <div className='mt-5 mb-5'>
          <div style={{ border: "1px solid gray ", borderRadius: "30px" }}> <p className='ps-2 pt-2'>Home <i className="fa-solid fa-right-long"></i> Catalog <i className="fa-solid fa-right-long"></i> <span>{jay1.name}</span></p></div>
        </div>
        <div className='bg-white container pb-4' style={{ borderRadius: "10px" }}>
          <div className='pb-5'>
            <div className="row p-4 justify-content-around ">
              <div className="col-xl-5 pt-4 free1 pb-5">
                <h3 className='pb-4'>{jay1.name}</h3>
                <p className='pb-4'>
                  A successful marketing plan relies heavily on the pulling- <br></br>
                  power of advertising copy. Writing result-oriented ad copy is <br></br>
                  difficult, as it must appeal to, entice, and convince consumers <br></br>
                  to take action. There is no magic formula to write perfect ad <br></br>
                  copy. It is based on a number of factors.
                </p>
                <h3 className='pb-3' style={{ color: "#a5c926" }}>${jay1.price}.00</h3>
                <input type='number' min={'1'}

                  id='inp'
                  value={val}
                  onChange={(e) => { setval(e.target.value) }}
                  style={{ width: "50px", borderRadius: "10px" }}></input>
                <div className='btn'
                  style={{ backgroundColor: "#a5c926", borderRadius: "20px" }}
                  onClick={enterdata}
                >Add to Cart</div>
              </div>
              <div className="col-xl-5" style={{ width: "550px" }}>
                <img src={jay1.url} className='img-fluied rounded-4 w-100' alt='' height="400px"></img>
              </div>
            </div>
            <div className='container p-4 '>
              <h5 className='pb-2'>Product Details</h5>
              <div className='inline'><div className='liner'></div></div>
            </div>
            <div className='container pt-3 p-4'>

              <div className='d-flex justify-content-around' style={{ flexWrap: "wrap" }}>
                <div>
                  <h4 className='pb-3'>Add Your Product Description</h4>
                  <p className='pb-4'>The rich text element allows you to create and format headings, paragraphs, blockquotes, images, <br></br>
                    and video all in one place instead of having to add and format them individually. Just double-click <br></br>
                    and easily create content. A rich text element can be used with static or dynamic content. For static  <br></br>
                    content, just drop it into any page and begin editing. For dynamic content, add a rich text field to  <br></br>
                    any collection and then connect a rich text element to that field in the settings panel. Voila!</p>


                  <h4 className='pb-3'>Simple & Elegant Template</h4>
                  <p className='pb-3'>Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled after a <br></br>
                    class is added to the rich text element using the "When inside of" nested selector system.</p>

                  <ul>
                    <li>Beautifully Designed</li>
                    <li>Fully Responsive</li>
                    <li>CMS Content</li>
                    <li>Smooth Animations</li>
                  </ul>

                  <p className='pb-4'>
                    A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result- <br></br>
                    oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action.
                  </p>


                  <h4 className='pb-1'>Perfect Choice for Your Business</h4>
                  <p>Grabbing the consumer’s attention isn’t enough; you have to keep that attention for at least a few <br></br>
                    seconds. This is where your benefits come into play or a product description that sets your offer <br></br>
                    apart from the others.</p>

                </div>

                <div className='productd'>
                  <div className='productd1'>
                    <table className='table ' >
                      <tbody>
                        <tr className='border-0'>
                          <td className='text-white'>Height </td>
                          <td className='text-white'>15.5 oz </td>
                        </tr>
                        <tr>
                          <td colSpan={2}>Width </td>
                          <td>10 in </td>
                        </tr>
                        <tr>
                          <td colSpan={2}>Height </td>
                          <td>18 in </td>
                        </tr>
                        <tr>
                          <td colSpan={2}>Length </td>
                          <td >12 in </td>
                        </tr>
                        <tr>
                          <td colSpan={2}>Weight </td>
                          <td >15.5 oz </td>
                        </tr>
                        <tr className='border-0'>
                          <td className='text-white'>Height </td>
                          <td className='text-white'>15.5 oz </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <RelatedProducts></RelatedProducts>
        <Subscribe></Subscribe>
        <ToastContainer/>
      </div>
      <Footer></Footer>

    </div>
  )
}

export default View1
