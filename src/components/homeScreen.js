/**
 * 
 *      @author Roger Henrique de Souza Conceição
 *      @description tela principal
 */
import React, { Component } from 'react'
import '../styles/homeScreen.css';
import { Link } from 'react-router-dom';

export default class HomeScreen extends Component {
    searchUsers(loginUser) {
        if (loginUser == undefined || loginUser == "" || loginUser == null) {
            fetch("https://api.github.com/users", { method: "GET" }).then((res) => res.json()).then((json) => {
                this.setState({
                    users: json
                })
            })
        } else {
            fetch("https://api.github.com/users/" + loginUser, { method: "GET" }).then((res) => res.json()).then((json) => {
                this.setState({
                    users: [json]
                })
                console.log("json :", json);
            }).catch((error) => {
                console.log("error");
            });
        }

    }

    constructor(props) {
        super(props)
        this.state = {
            users: [],
            textValue: "",
            loginUser: "",
        }
    }

    componentDidMount() {
        this.searchUsers();
    }

    render() {
        return (
            <div className="homeScreen">
                <div>
                    <input type="text" name="user" onChange={(e) => { this.setState({ textValue: e.target.value }) }}  ></input>
                    <button onClick={() => { this.searchUsers(this.state.textValue) }}>Search</button>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>
                                <p>#</p>
                            </th>
                            <th>
                                <p>Perfil</p>
                            </th>
                            <th>
                                <p>Login</p>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map((v, i) => {
                                return (
                                    <tr key={i} className="itens" onClick={() => { <Link to="/perfil/"+v.loginUser ></Link>}}>
                                        <td>
                                            <p>{i}</p>
                                        </td>
                                        <td className="image">
                                            <img src={v.avatar_url} />
                                        </td>
                                        <td>
                                            <p>{v.login}</p>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
