import React from 'react'
import { Outlet } from 'react-router-dom'
import Navpro from '../Navpro/Navpro'

export default function Products() {
  return <>
    <Outlet/>
    <Navpro/>
    </>
  
}
