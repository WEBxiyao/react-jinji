import React from 'react'
import withFectch from './WithTest'


const Testb=withFectch('/category/app_category')(props=>{
    console.log(props,"jjj")
   return (
   <div>{props.data[0].name}</div>
   )
})
export default Testb