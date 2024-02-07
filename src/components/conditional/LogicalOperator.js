import React from "react";

export default function LogicalOperator() {

    let cars = ["Maruthi", "Kia", "Hunday"];

    return <>
        {cars.length > 0 &&
            <div>
                <h2> Logical Operator Demo </h2>
                <h5> Yours cars are </h5>
                <ul>
                    {cars.map(car => <li> {car} </li> )}
                </ul>
            </div>
        }
    </>
}