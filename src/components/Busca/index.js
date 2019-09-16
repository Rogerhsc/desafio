/**
 *
 *      @author Roger Henrique de Souza Conceição
 *      @description tela de Busca
 */
import React, { Component } from "react";
import "./style.css"
import { Link } from "react-router-dom";
import Item from "../Item";
import Header from './../Header/index';

export default class HomeScreen extends Component {
  searchUsers(loginUser) {
    if (loginUser == undefined || loginUser == "" || loginUser == null) {
      fetch("https://api.github.com/users", { method: "GET" })
        .then(res => res.json())
        .then(json => {
          this.setState({
            users: json
          });
        });
    } else {
      fetch("https://api.github.com/users/" + loginUser, { method: "GET" })
        .then(res => res.json())
        .then(json => {
          this.setState({
            users: [json]
          });
          console.log("json :", json);
        })
        .catch(error => {
          console.log("error");
        });
    }
  }
  keyPress(e) {

  }

  constructor(props) {
    super(props);
    this.state = {
      users: [],
      textValue: "",
      loginUser: ""
    };
  }

  componentDidMount() {
    this.searchUsers();
  }

  render() {
    return (
      <div className="homeScreen">
      <Header></Header>
        <div className="textButton">
          <input
            type="text"
            name="user"
            className="searchBox"
            onKeyDown={e => {
              if(e.key == "Enter"){
                this.searchUsers(this.state.textValue)
              }
            }}
            onChange={e => {
              this.setState({ textValue: e.target.value });
            }}
            placeholder="Login Usuario"
          ></input>
          <div className="button" onClick={() => {
            this.searchUsers(this.state.textValue);
          }}><p>Buscar</p></div>

        </div>
        <div>
          {this.state.users.map((v, i) => {
            return (
              <Link key={i} to={`/perfil/${v.login}`}>
                <Item urlImage={v.avatar_url} login={v.login}></Item>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}
