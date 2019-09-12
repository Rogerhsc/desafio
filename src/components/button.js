/**
 * 
 *      @author Roger Henrique de Souza Conceição
 *      @description botões para o menu
 */ 

import React, { Component } from 'react'
import '../styles/Button.css'
import Icon from '@material-ui/core/Icon';

export default class Button extends Component {  
  render() {
    return (
      <div className="button">
        <Icon>add_circle</Icon>
        <p>{this.props.label}</p>
      </div>
    )
  }
}
