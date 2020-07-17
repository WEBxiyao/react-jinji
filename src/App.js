import React from 'react'
// import Testa from '../src/components/demo1/Testa'
// import Testb from '../src/components/demo1/Testb'
import Index from '../src/components/demo2/index'
import Error from '../src/components/demo2/Error'
import ErroIndex from '../src/components/demo2/erroIndex'
export default function App() {
  return (
    <div>
      {/* <Testa />
      <Testb /> */}
      <Index />
    <Error render={(error,errorinfo)=><p>{'组件出错了'}</p>}>
        <ErroIndex />
      </Error>
    </div>
  )
}
