import React, { useContext } from 'react'
import { data } from './Compo1'

function Compo3() {
    const data2=useContext(data);
     console.log(data2);

  return (
    <div>Compo3:
        <h1>Ok!! Finally, We have our data:{data2}</h1>

    </div>
  )
}

export default Compo3