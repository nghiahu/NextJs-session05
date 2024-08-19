"use client"
import React from 'react'
export default function page(props:any) {
    const {params} = props
    const task=[
        {
            contens:"task1",
            idtask:123,
            idProject:1
        },
        {
            contens:"task2",
            idtask:456,
            idProject:2
        },
        {
            contens:"task3",
            idtask:789,
            idProject:3
        }
    ]
    let taskFilter = task.filter((item)=>{
        return item.idProject == params.idProject
    })
  return (
    <div>
        <div>Danh sach nhiem vu cua du an co id: {params.idProject}</div>
        {taskFilter.map((item)=>{
            return <>{item.contens}</>
        })}
    </div>
  )
}
