"use client"
import React from 'react'
export default function page(props:any) {
    const {params} = props
    const post=[
        {
            contens:"bài viết 1",
            idPost:123,
            idUser:1
        },
        {
            contens:"bài viết 2",
            idPost:456,
            idUser:2
        },
        {
            contens:"bài viết 3",
            idPost:789,
            idUser:3
        }
    ]
    let postFilter = post.filter((item)=>{
        return item.idUser == params.idUser
    })
  return (
    <div>
        <div>Trang danh sach bài viết của user có id là: {params.idUser}</div>
        {postFilter.map((item)=>{
            return <>{item.contens}</>
        })}
    </div>
  )
}
