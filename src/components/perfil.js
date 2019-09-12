/**
 * 
 *      @author Roger Henrique de Souza Conceição
 *      @description perfil de usuario
 */

import React, { Component } from 'react'

export default class Perfil extends Component {
    constructor(props){
        super(props)
        this.state = {
            loginUsuario: this.props.loginUser,
            numSeguidores: 0,
            numSeguidos: 0,
            avatarImage: "",
            email: "",
            bio: "",
            name: "",
        }
    }
    componentDidMount(){
        //https://api.github.com/users/mojombo/followers => seguidores
        //https://api.github.com/users/mojombo/following => seguem
        let url = "https://api.github.com/users/" + this.state.loginUsuario;
        fetch(url, { method: "GET" }).then((res) => res.json()).then((json) => {
            if(json.message != "Not Found"){
                this.setState({
                    avatarImage: json.avatar_url,
                    email: json.email,
                    bio: json.bio,
                    name: json.name
                })
            }
            
            console.log("json :" ,json);
        }).catch((error) => {
            console.log("error");
        });
        fetch(url + "/followers", { method: "GET" }).then((res) => res.json()).then((json) => {
            this.setState({
                numSeguidores: json.length
            })
            console.log("json :" ,json);
        }).catch((error) => {
            console.log("error");
        });
        fetch(url + "/following", { method: "GET" }).then((res) => res.json()).then((json) => {
            this.setState({
                numSeguidos: json.length
            })
            console.log("json :" ,json);
        }).catch((error) => {
            console.log("error");
        });
    }
  render() {
    return (
      <div>
        <p>{this.state.name}</p>
        <p>{this.state.numSeguidores}</p>
        <p>{this.state.numSeguidos}</p>
        <p>{this.state.avatarImage}</p>
        <p>{this.state.email}</p>
        <p>{this.state.bio}</p>
      </div>
    )
  }
}
