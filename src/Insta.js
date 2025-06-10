import React, { useEffect, useState } from 'react'
import {  instagram } from './Cart';


function Insta() {
console.log(instagram[0].insta)
    return (
        <div className='pb-5'>
            <div className='kau text-center'>
                <div className='elas' >
                    <p style={{ color: "#a5c926" }}>@ElasticThemes</p>
                    <h2>We're on Instagram!</h2>
                </div>

                <div className='d-flex flex-wrap gap-3 justify-content-center'>
                    {
                        instagram[0].insta &&
                        instagram[0].insta.map((data) => (
                            <div className='ins' key={data.id} >
                                <div style={{ height: "200px" }} >
                                    <img src={data.url} alt='' height={'200'}></img>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='pt-5'>
                    <button className='more' >See More Photos</button>
                </div>
            </div>
        </div>
    )
}

export default Insta
