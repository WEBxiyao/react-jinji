import React from 'react'
import withFectch from './WithTest'


const Testa=withFectch('/index_category/data')(props=>{
   return (
   <div>{props.data.category[0].name}</div>
   )
})
export default Testa