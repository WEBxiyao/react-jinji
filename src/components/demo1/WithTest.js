import React, { Component } from 'react'

const withFetch=(url)=>(FetchComponent)=>{
   return class extends Component {
      state={
          loading:true,
          content:null
      }
      componentDidMount(){
          fetch(url)
          .then(res=>res.json())
          .then(data=>{
              console.log(data,"kkkkk")
              this.setState({
                  loading:false,
                  content:data.data
              })
          })
      }
       render(){
        if(this.state.loading){
            return (
                <div>loading...</div>
            )
        }else{
            return (
                <FetchComponent data={this.state.content} />
             )
        }
          
       }
    }
}

export default withFetch