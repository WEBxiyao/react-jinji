import React, { Component } from 'react'

export default class Error extends Component {
    state={
        haserror:false,
       erro:null,
       erroinfo:null
    }
    componentDidCatch(error,errorinfo){
    this.setState({
        haserror:true,
        erro:error,
        erroinfo:errorinfo
    })
    }
    render() {
        if(this.state.haserror){
            return (
            <div>{this.props.render(this.state.erro,this.state.erroinfo)}</div> 
            )
        }else{
            return this.props.children
            
        }
    }
}
