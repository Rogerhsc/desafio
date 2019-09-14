/**
 *
 *      @author Roger Henrique de Souza Conceição
 *      @description perfil de usuario
 */

import React, { Component } from "react";
import "./style.css"

export default class Perfil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginUsuario: this.props.match.params.loginUser,
      numSeguidores: 0,
      numSeguidos: 0,
      avatarImage: "",
      email: "",
      bio: "",
      name: ""
    };
  }
  componentDidMount() {
    //https://api.github.com/users/mojombo/followers => seguidores
    //https://api.github.com/users/mojombo/following => seguem
    let url = "https://api.github.com/users/" + this.state.loginUsuario;
    fetch(url, { method: "GET" })
      .then(res => res.json())
      .then(json => {
        if (json.message != "Not Found") {
          this.setState({
            avatarImage: json.avatar_url,
            email: json.email,
            bio: json.bio,
            name: json.name
          });
        }
      })
      .catch(error => {
        console.log("error");
      });
    fetch(url + "/followers", { method: "GET" })
      .then(res => res.json())
      .then(json => {
        this.setState({
          numSeguidores: json.length
        });
      })
      .catch(error => {
        console.log("error");
      });
    fetch(url + "/following", { method: "GET" })
      .then(res => res.json())
      .then(json => {
        this.setState({
          numSeguidos: json.length
        });
      })
      .catch(error => {
        console.log("error");
      });
  }
  render() {
    return (
      <div className="containerSelf">
        <div className="perfilContainer">
          <div className="perfilImage">
            <img src={this.state.avatarImage} />
            <p>{this.state.name}</p>
            <p className="email">{this.state.email == null ? "Não Possui email cadastrado " : this.state.email}</p>
          </div>
          <div className="perfilDesc">
            <div className="bio">
              <p>{this.state.bio}</p>
            </div>
          </div>
          <div>
            <p>Seguidores: {this.state.numSeguidores}</p>
            <p>Seguindo: {this.state.numSeguidos}</p>
          </div>
        </div>
      </div>
    );
  }
}
