import React from 'react'
import products from './products.json'

export default function ListItem() {
    return <>
        <h2 className='text-centre'>Product List</h2>
        <div className='container'>
            <div className='row'>
                {products.map(product => {
                    return <div className='col-sm-3'>
                        <div className="card" >
                            <img src={product.image} className="card-img-top" alt="..." style={{ height: '250px' }} />
                            <div className="card-body text-center">
                                <h5 className="card-title">{product.category}</h5>
                                <h4 className="card-title">{product.price}</h4>
                                <p className="card-text text-truncate" style={{ height: "150px" }}>{product.description}</p>
                                <button className='btn btn-primary'>Buy Now</button>
                            </div>
                        </div>
                    </div>
                })}
            </div>

        </div>
    </>
}
