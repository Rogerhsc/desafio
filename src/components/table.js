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
      <div>
        <table>
          <tr>
            <th>
              Avatar
            </th>
            <th>
              Login
            </th>
          </tr>
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
