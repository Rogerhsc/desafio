/**
 * 
 *      @author Roger Henrique de Souza Conceição
 *      @description menu de utilidades
 */ 

import React, { Component } from 'react'
import '../styles/menu.css';
import Button from './button';

export default class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <div className="menuLogo">
            <img src={require("../images/esapiensLogo.png")}></img>
        </div>
        <hr></hr>
        <Button></Button>
      </div>
    )
  }
}
