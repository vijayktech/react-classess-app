import React from 'react'

export default function UserCard({ userObj }) {
    console.log(userObj);

    let { name, email, address, address: { city }, phone } = userObj;

    return <div className='col-sm-3'>
        <div className="card text-center">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREZNQ6Pte02JNcAfeti0b-oiumHtdNOkXQrCZp7bfQYuxe44LbbaIN0MccovXN04stLDg&usqp=CAU" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text"> Email : {email} </p>
                <p className="card-text"> Address-city : {city} </p>
                <p className="card-text"> Phone : {phone} </p>
                <a href="#" className="btn btn-primary">Details</a>
            </div>
        </div>
    </div>    
}
