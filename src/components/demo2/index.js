import React,{useState} from 'react'

export default function Index() {
    const [count,setCount]=useState(0)
    const add=()=>{
        setCount(count+1)
    }
    const remove=()=>{
        setCount(count-1)
    }
    return (
        <div>
            <p>这个地方是标题</p>
            <p>数量：{count}</p>
            <button onClick={add}>点击加一</button>
            <button onClick={remove}>点击减一</button>
        </div>
    )
}
