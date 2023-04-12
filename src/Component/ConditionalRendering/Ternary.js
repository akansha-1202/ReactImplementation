import React from 'react'
import '../style.css'

const Ternary = () => {
    const Consistency=1;
  return (
    <div>Ternary
        <div>
            this is example of ternary operator
        </div>
        {Consistency===1?<div className='div1'>You will get Placed</div>:<div className='div2'>Try one more time</div>}
    </div>
  )
}

export default Ternary