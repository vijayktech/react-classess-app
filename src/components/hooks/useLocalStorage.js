import React, { useEffect, useState } from "react";

// Custom Hooks which store the value and manages it. 
export default function useLocalStorage(key, initialValue){

     
    // localStorage from window object which stores key/value pair in browser
    const storedValue = localStorage.getItem(key);
    console.log(key, storedValue);

    const [value, setValue] = useState(storedValue || initialValue);

    const setStoredValue = (newValue) => {
        setValue(newValue);
        localStorage.setItem(key, newValue);
    }

    return [value, setStoredValue];
}