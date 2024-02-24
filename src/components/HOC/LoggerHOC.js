import React, { useEffect } from "react";

const LoggerHOC = (InputComponent) => {

    const EnhancedComponent = (props) => {
        // this useEffect calls when page load which is mount and unmount
        // as there is second parameter is empty array []
        useEffect(()=>{
            console.log(`${InputComponent.name} is mounted`);
            return () => {
                console.log(`${InputComponent.name} is un-mounted`);
            }
        }, []);

        // updated Component as thre is no second parameter
        useEffect(()=>{
            console.log(`${InputComponent.name} is updated`)
        });

        return <InputComponent {...props}/>
    };

    return EnhancedComponent;
}

export default LoggerHOC;