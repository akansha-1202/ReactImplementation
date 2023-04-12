import React, {memo} from 'react'

const ChildCompo = (memozi, sval) => {
    console.log("I am from child Component.")
  return (
    <div>ChildCompo</div>
  )
}

export default memo(ChildCompo)