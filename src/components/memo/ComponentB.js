import React from 'react'

 function ComponentB({compB}) {
    console.log('This is Component B')
  return <>
    <h2> This is Component B value is {compB}</h2>
  </>
}

// React.memo() is not rendered if no change in respective state compB. 
export default React.memo(ComponentB);