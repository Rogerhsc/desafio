import React, { Component } from 'react'
import "./style.css"
import { Star, DoubleArrow } from '@material-ui/icons';
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
    render() {
        return (
            <div className="containerRepository">
                <h1>Repositorio</h1>
                <hr></hr>
                <h2>{this.props.match.params.reposName}</h2>
                <div className="desc">
                    <div className="descRepo">
                        <p>{this.state.repository.description == null ? "Não possui descrição" : this.state.repository.description}</p>
                    </div>
                    <div clasName="reposStars">
                        <p><Star></Star>{this.state.repository.stargazers_count}</p>
                    </div>
                    <div>
                        <p>Linguagem: {this.state.repository.language}
                            <div>
                            </div>
                        </p>
                    </div>
                    <div className="linkRepository">
                        <p><a href={this.state.repository.html_url} target="_blank"><b>Acesse o repositorio</b> <DoubleArrow></DoubleArrow></a></p>
                    </div>
                </div>
            </div >
        )
    }
}
