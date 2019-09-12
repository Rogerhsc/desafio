/**
 * 
 *      @author Roger Henrique de Souza Conceição
 *      @description tela principal
 */ 
import React, { Component } from 'react'
import '../styles/homeScreen.css';
import Table from './table';


export default class HomeScreen extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            users: []
        }
    }

    componentWillMount() { 
        fetch("https://api.github.com/users", {method: "GET"}).then((res) => res.json()).then((json) => {
            this.setState({
                users: json
            })
        })
    }
    
  render() {
    return (
      <div className="homeScreen">
        <input type="text" name="user" />
        <button> Search</button>
        <div>
        {   
            this.state.users.map((v, i) => {
                return(
                    <div>
                        <Table 
                            image={v.avatar_url}
                            name={v.login}
                        />
                    </div>
                )

            })
        }
        </div>
      </div>
    )
  }
}
