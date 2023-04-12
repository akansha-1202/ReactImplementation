import React, { createContext } from 'react'
import Compo2 from './Compo2'

const data=createContext();

function Compo1() {
const name="hello";
console.log(data);

  return (
    <div>Compo1:{name}
            <data.Provider value={name}>
            <Compo2 />
         </data.Provider>
    </div>
  )
}

export default Compo1;
export {data}