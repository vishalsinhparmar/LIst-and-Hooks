import React from 'react'

export default function ListItem() {
    const ListItem = [
        {
        id:1,
        fruits:'banana'
    },
    {
        id:2,
        fruits:'Orange'
    },
    {
        id:3,
        fruits:'Apple'
    },
    {
        id:4,
        fruits:'managoes'
    },

]
  return (
    <div>
        {ListItem.map((item)=>(
        <ul key={item.id}>
            <li>{item.fruits}</li>
        </ul>
        ))}
    </div>
  )
}

