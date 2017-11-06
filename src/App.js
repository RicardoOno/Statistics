import React, { Component } from 'react';
import './css/materialize.min.css';
import './css/estilos.css';
import $ from 'jquery';

class App extends Component {

    constructor(){
        super();
        this.state = {
            lista: []
        };
    }

    /* componentDidMount() é usado qunado o componente acabou de ser montado */
    componentWillMount(){
        console.log('willMount');
        $.ajax({
            //url: "http://localhost:8080/api/autores",
            url: 'http://localhost:8000/api',
            dataType: 'json',
            success: function (res) {
                console.log('resposta');
                this.setState({lista: res});
            }.bind(this)
        })
    }

    render() {
        console.log('render');
        return (
            <div>
                <header>
                    <ul id="slide-out" className="side-nav fixed">
                        <li><a href="#!">Pessoas</a></li>
                        <li><a href="#!">Sobre</a></li>
                    </ul>
                </header>
                <main className="">
                    <table>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Item Name</th>
                            <th>Item Price</th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <td>Alvin</td>
                            <td>Eclair</td>
                            <td>$0.87</td>
                        </tr>
                        <tr>
                            <td>Alan</td>
                            <td>Jellybean</td>
                            <td>$3.76</td>
                        </tr>
                        <tr>
                            <td>Jonathan</td>
                            <td>Lollipop</td>
                            <td>$7.00</td>
                        </tr>
                        </tbody>
                    </table>
                </main>
            </div>
        )
    }
}

export default App;

/*                               {
 this.state.lista.map( function(lista) {
 return(
 <tr>
 <td>{lista.nome}</td>
 </tr>
 );
 })
 }
 */