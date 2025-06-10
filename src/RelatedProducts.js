import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {  instagram } from './Cart'

function RelatedProducts() {

    // const [rela, setrela] = useState('')

    // useEffect(() => {
    //     fetch("http://localhost:500/Related")
    //         .then((res) => { return res.json() })
    //         .then((data) => {
    //             setrela(data)
    //         })
    // }, [])

    console.log(instagram[1].Related)
    return (
        <div >
            <div className='p-2 mt-5 mb-5'>
            <div className=''>
                <div className='car2'>
                    <div className='text-start stuf'><h2>Related Products</h2></div>
                    <div className='text-end line'>
                        <Link to={'/catalog'} className='line1' style={{ color: "black", textDecoration: "none" }}>See All Toys
                            <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                    </div>
                </div>
            </div>
                <div className='cardi'>
                <div className=' text-center card1'>
                    {
                       instagram[1].Related &&
                       instagram[1].Related.map((rel) => (
                            <div className=' bg-white sec1 mb-3' key={rel.id}>
                                <img src={rel.url} height={190} alt=''></img>
                                <h4 className='pt-2'>{rel.name}</h4>
                                <button className='btn btn-success'>{rel.price}</button>
                            </div>
                        ))
                    }
                </div>
                </div>
            </div>
        </div>
    )
}

export default RelatedProducts
