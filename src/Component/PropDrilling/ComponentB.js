import React from 'react'
import ComponentC from './ComponentC'

function ComponentB({Data}) {
  return (
    <div>ComponentB
        <ComponentC Data={Data}/>
    </div>
  )
}

export default ComponentB