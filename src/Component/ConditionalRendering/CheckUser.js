import React from 'react'
import LogIn from './LogIn'
import LogOut from './LogOut'

const CheckUser = ({User}) => {
  if (User===true)
  return <LogIn/>
  else
  return <LogOut/>
}

export default CheckUser