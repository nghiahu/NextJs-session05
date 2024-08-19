"use client"
import React from 'react'
interface Props{

}
export default function page(props:any) {
    const {params} = props
  return (
    <div>
        Company Name: {params.idProduct}
    </div>
  )
}
