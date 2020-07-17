import React from 'react'

export default function ErroIndex() {
    return (
        <div>
            {
                null.map((v,index)=>{
                    return <div key={index}>{v.name}</div>
                })
            }
        </div>
    )
}
