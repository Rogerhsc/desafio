/**
 *
 *      @author Roger Henrique de Souza Conceição
 *      @description tela principal
 */
import React, { Component } from "react";
import "../styles/homeScreen.css";
import { Link } from "react-router-dom";
import Item from "./Item";

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
        <div>
          <input
            type="text"
            name="user"
            onChange={e => {
              this.setState({ textValue: e.target.value });
            }}
          ></input>
          <button
            onClick={() => {
              this.searchUsers(this.state.textValue);
            }}
          >
            Search
          </button>
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
