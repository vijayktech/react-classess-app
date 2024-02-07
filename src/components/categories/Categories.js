import React from 'react'
import './Categories.css'
import Category from './Category'

export default function Categories() {

    let categoriesArr = [
        { name: 'Grocery', img: 'https://rukminim2.flixcart.com/flap/72/72/image/29327f40e9c4d26b.png?q=100' },
        { name: 'Mobile', img: 'https://rukminim2.flixcart.com/flap/72/72/image/22fddf3c7da4c4f4.png?q=100' },
        { name: 'Fashion', img: 'https://rukminim2.flixcart.com/fk-p-flap/72/72/image/0d75b34f7d8fbcb3.png?q=100' },
        { name: 'Electronics', img: 'https://rukminim2.flixcart.com/flap/72/72/image/69c6589653afdb9a.png?q=100' },
        { name: 'Home & Furniture', img: 'https://rukminim2.flixcart.com/flap/72/72/image/ab7e2b022a4587dd.jpg?q=100' },
        { name: 'Appliances', img: 'https://rukminim1.flixcart.com/fk-p-flap/72/72/image/0139228b2f7eb413.jpg?q=100' },
        { name: 'Travel', img: 'https://rukminim1.flixcart.com/flap/72/72/image/71050627a56b4693.png?q=100' },
        { name: 'Beauty', img: 'https://rukminim1.flixcart.com/flap/72/72/image/dff3f7adcf3a90c6.png?q=100' }
    ]

    return <div className='container'>
        <div className='row'>
            {categoriesArr.map((category, index) =>{ return <Category cat={category} key={index}/>}  )}
        </div>
    </div>


}
