/**
 *
 *      @author Roger Henrique de Souza Conceição
 *      @description View repositorio
 */

import React, { Component } from 'react'
import "./style.css"
import { Star, DoubleArrow, KeyboardArrowLeft } from '@material-ui/icons';
import { Link } from 'react-router-dom';
export default class Repository extends Component {
    constructor(props) {
        super(props)
        this.state = {
            desc: "",
            repository: ""
        }
    }
    componentDidMount() {
        fetch("https://api.github.com/repos/" + this.props.match.params.loginUser + "/" + this.props.match.params.reposName, { method: "GET" })
            .then(res => res.json()).then((json) => {
                this.setState({
                    repository: json
                })
            })
    }
    formataData(data) {
        if (data.toString().indexOf("T") > -1) {
            var onlyDate = data.split("T");
            onlyDate = onlyDate[0].split("-")

            return onlyDate[2] + "/" + onlyDate[1] + "/" + onlyDate[0];
        };
    }
    render() {
        const repos = this.state.repository
        return (
            <div className="containerRepository">
                <div className="headerRepository">
                    <Link to={`/perfil/${this.props.match.params.loginUser}`}>
                        <KeyboardArrowLeft></KeyboardArrowLeft>
                    </Link>
                    <div className="headerTextRepo">
                        <b>Repositório</b>
                    </div>
                </div>
                <h2>{this.props.match.params.reposName}</h2>

                <div className="reposStars">
                    <Star></Star><p>{repos.stargazers_count}</p>
                </div>
                <div className="desc">
                    <div className="descRepo">
                        <p>{repos.description == null ? "Não possui descrição" : repos.description}</p>
                    </div>
                    <p>Criado em: {this.formataData(String(repos.created_at))}</p>
                    <div>
                        <p>Linguagem: {repos.language}
                        </p>
                    </div>
                    <div className="linkRepository">
                        <p><a href={repos.html_url} target="_blank"><b>Acesse o repositorio</b> <DoubleArrow></DoubleArrow></a></p>
                    </div>
                </div>
            </div>
        )
    }
}
