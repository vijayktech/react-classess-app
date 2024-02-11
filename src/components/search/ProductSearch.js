import React, { useState } from "react";
import ProductArr from "./products.json";
import SearchBar from "react-js-search";

export default function ProductSearch() {

    const [filteredProducts, setFilteredProducts] = useState(ProductArr);

    let sortAsc = () => {
       let ascProd = filteredProducts.sort((p1, p2) => {
            return p1.price - p2.price
        })

        setFilteredProducts([...ascProd]);
    } 

    const sortDesc = () => {
       let dscProd = filteredProducts.sort((p1, p2) => {
            return p2.price - p1.price
        })

        setFilteredProducts([...dscProd]);
    } 
    return <>

        <div className='container'>
            <div className="row">
                <div className="col-sm-8">
                <SearchBar
                    onSearchTextChange={(term, filteredProducts) => {
                        setFilteredProducts(filteredProducts)
                    }}
                    // onSearchButtonClick={this.onSearchClick}
                    placeHolderText={"Search here..."}
                    data={ProductArr}
                />
                </div>
                <div className="col-sm-4 mt-2">
                    <button onClick={sortAsc} className="btn btn-primary m1">ASC</button>
                    <button onClick={sortDesc} className="btn btn-secondary">DSC</button>
                </div>
            </div>


            <div className='row'>
                {filteredProducts.map(product => {
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