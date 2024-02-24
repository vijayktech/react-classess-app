import React from 'react'

 function ComponentC({compC}) {
  
    console.log('This is Component C');
  
  return <>
    <h2>This is Component C value is {compC}</h2>
  </>
}

// Will not render if compC state is not changed. 
export default React.memo(ComponentC);