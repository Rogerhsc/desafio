/**
 * 
 *      @author Roger Henrique de Souza Conceição
 *      @description tabela de exibição
 */ 

import React, { Component } from 'react'
import '../styles/tableStyle.css'
export default class Table extends Component {
  render() {
    return (
      <div className="container">
        <table>
            <tr>
                <td className="image">
                    <img src={this.props.image} />
                </td>
                <td>
                    <p>{this.props.name}</p>
                </td>
            </tr>
        </table>
      </div>
    )
  }
}
