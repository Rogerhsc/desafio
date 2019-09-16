/**
 *
 *      @author Roger Henrique de Souza Conceição
 *      @description perfil de usuario
 */

import React, { Component } from "react";
import "./style.css"
import "../Table/style.css";
import Table from './../Table/index';
import { ArrowDropDown, ArrowDropUp, KeyboardArrowLeft } from '@material-ui/icons/';
import { Link } from 'react-router-dom';
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
      name: "",
      repositorys: [],
      actualOrder: "",
      order: "asc",
      componentOrder: ""
    };
  }
  componentDidMount() {
    //https://api.github.com/users/mojombo/followers => seguidores
    //https://api.github.com/users/mojombo/following => seguem
    let url = `https://api.github.com/users/${this.state.loginUsuario}`;
    fetch(url, { method: "GET" })
      .then(res => res.json())
      .then(json => {
        this.setState({
          avatarImage: json.avatar_url,
          email: json.email,
          bio: json.bio,
          name: json.name,
          numSeguidores: json.followers,
          numSeguidos: json.following
        });
      }).catch(error => {
        console.log("error");
      });

    fetch(url + "/repos", { method: "GET" }).then(res => res.json()).then(json => {
      var arrayOrdenado = json.sort((x, y) => {
        return x.stargazers_count - y.stargazers_count
      });
      this.setState({
        repositorys: this.ordernarRepository(arrayOrdenado, ""),
        actualOrder: "stargazers_count",
        order: "desc"
      })

    });
    window.scrollTo(0, 0)
  }
  ordernarRepository(array, param) {
    if (param == this.state.actualOrder) {
      if (this.state.order == "asc") {
        this.setState({
          order: "desc",
          componentOrder: <ArrowDropUp />
        })
      } else if (this.state.order == "desc") {
        this.setState({
          order: "asc",
          componentOrder: <ArrowDropDown />
        })
      }
    } else {
      this.setState({
        order: "asc",
        componentOrder: <ArrowDropDown />
      });
    }
    if (array.length != 0) {
      if (this.state.actualOrder != param) {
        return array.sort((x, y) => {
          if (param == "stargazers_count") {
            return x.stargazers_count - y.stargazers_count;
          } else if (param == "name") {
            return x.name < y.name ? -1 : x.name > y.name ? 1 : 0;;
          }
        });
      } else {
        return array.reverse((x, y) => {
          if (param == "stargazers_count") {
            return x.stargazers_count - y.stargazers_count;
          } else if (param == "name") {
            return x.name < y.name ? -1 : x.name > y.name ? 1 : 0;
          }
        });
      }
    } else {
      return []
    }
  }

  render() {
    return (
      <div className="containerSelf">
        <div className="perfilContainer">
          <div className="perfilHeader">
            <Link to="/">
              <KeyboardArrowLeft></KeyboardArrowLeft>
            </Link>
            <div className="headerText">
              <b>Perfil</b>
            </div>
          </div>
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
          <div className="repos">
            <strong>Repositorios</strong>
          </div>
          <div className="reposTable">
            <div className="orderTable">
              <div className="numCellPerfil">#</div>
              <div className="cellNamePerfil" onClick={() => {
                this.setState({
                  actualOrder: "name",
                  repositorys: this.ordernarRepository(this.state.repositorys, "name")
                });
              }
              }>Repositorio{this.state.actualOrder == "name" ? this.state.componentOrder : ""}</div>
              <div className="cellStar" onClick={() => {
                if (this.state.actualOrder == "stargazers_count") {
                }
                this.setState({
                  actualOrder: "stargazers_count",
                  repositorys: this.ordernarRepository(this.state.repositorys, "stargazers_count")
                });
              }
              }>Estrelas{this.state.actualOrder == "stargazers_count" ? this.state.componentOrder : ""}</div>
            </div>
            <div className="table">
              {
                this.state.repositorys.map((v, i) => {
                  return (
                    <Link key={i} to={`/perfil/${this.state.loginUsuario}/${v.name}`}>
                      <Table key={i} position={i} private={v.private.toString()} repoName={v.name} stars={v.stargazers_count}></Table>
                    </Link>
                  )
                })
              }
            </div>
          </div>


        </div>
      </div>
    );
  }
}
