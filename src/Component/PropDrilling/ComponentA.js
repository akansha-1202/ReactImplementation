import React from 'react'
import ComponentB from './ComponentB'

function ComponentA({Data}) {
  return (
    <div>ComponentA:{Data}
        <ComponentB Data={Data}/>
    </div>
  )
}

export default ComponentA