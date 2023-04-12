import React from 'react'
import ComponentD from './ComponentD'

function ComponentC({Data}) {
  return (
    <div>ComponentC
        <ComponentD Data={Data}/>
    </div>
  )
}

export default ComponentC