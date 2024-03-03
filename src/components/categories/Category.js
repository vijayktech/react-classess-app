import React from "react";

export default function Category({ cat }) {
    let { name, img } = cat;

    return <div className='col'>
            <div className='category text-center'>
                <img src={img} />
                <div>{name}</div>
            </div>
        </div>

}