/**
 *
 *      @author Roger Henrique de Souza Conceição
 *      @description componente tabela para exiber repositorios 
 */

import React, { Component } from 'react'
import "./style.css"
import { Star, Lock, LockOpen } from '@material-ui/icons/';

export default class Table extends Component {
    checkPrivate = () => {
        if(this.props.private == "true"){
            return  <Lock></Lock>
        }else{
            return  <LockOpen></LockOpen>
        }
    }
  render() {
    return (
      <div className="containerTable">
        <div className="numCell">
            {this.props.position} 
        </div>
        <div className="cellPrivate">
            {this.checkPrivate()}
        </div>
        <div className="cellName">
            {this.props.repoName}
        </div>
        <div className="cellStar">
            <Star></Star><p>{this.props.stars}</p>
        </div>
      </div>
    )
  }
}
