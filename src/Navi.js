import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useEffect, useState } from 'react';
import { Bounce, ToastContainer, toast } from 'react-toastify';



function MyVerticallyCenteredModal(props) {

   

    var [filldata, setfilldata] = useState("")

    useEffect(() => {
        fetch("https://sankaliyavivek.github.io/Toy/cart.json")
        
            .then((res) => {
                return res.json()
            })
            .then((t) => {
                setfilldata(t)
            })

    }, [])
    const remove = (rem) => {

        fetch('https://sankaliyavivek.github.io/Toy/cart.json/' + rem, {
            method: "delete"
        })

        window.location.reload();

    }

    const buy=(buy)=>{
        toast.info('In progress ', {
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

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Your Cart
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='App'>

                {
                    filldata && filldata.map((i) => (
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0px 40px" }} key={i.id}>
                            <div style={{ display: "flex" }}>
                                <div className='mx-3'>
                                    <img src={i.url} alt="" height={70} />
                                </div>
                                <div>
                                    <h5>{i.name}</h5>
                                    <span>${i.price}.00 USD</span><br></br>
                                    <p className='btn btn-danger mx-1' style={{ cursor: "pointer" }}
                                        onClick={() => { remove(i.id) }}
                                    >Remove</p>
                                    <p className='btn btn-info' onClick={()=>{
                                        buy(i.id)
                                    }}> Buy Now..</p>
                                </div>

                            </div>
                            {/* <div>
                                <input type="number" min={"1"} style={{ borderRadius: "40px", width: "100px", height: "50px", padding: "0px 20px" }} 
                                value={val}
                                onChange={(e)=>{setval(e.target.value)}}
                                />
                            </div> */}

                            <ToastContainer></ToastContainer>
                        </div>




                    ))
                }

               

            </Modal.Body>
        </Modal>
    );
}

function Jay() {
    const [modalShow, setModalShow] = React.useState(false);

    var [filldata, setfilldata] = useState("")

    useEffect(() => {
        fetch("https://sankaliyavivek.github.io/Toy/cart.json")
            .then((res) => {
                return res.json()
            })
            .then((t) => {
                setfilldata(t)
            })
    }, [])

    return (
        <>
            <Button id='btncolor' onClick={() => setModalShow(true)}>
                Cart
                <span className='mx-3'><i className="fa-solid fa-cart-shopping"></i></span>
                <span className='colorinbackground'>{filldata.length}</span>
            </Button>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}

export default Jay;
