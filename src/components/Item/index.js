/**
 *
 *      @author Roger Henrique de Souza Conceição
 *      @description Componente responsavel pela lista de usuarios
 */

import React, { Component } from "react";
import "./style.css"
export default class Item extends Component {
  render() {
    return (
      <div className="itemContainer">
        <div className="interno">
          <img src={this.props.urlImage} />
          <p>{this.props.login}</p>
        </div>
      </div>
    );
  }
}
