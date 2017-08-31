import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Lista from './components/Lista.jsx'

class App extends Component {
    constructor(){//construye el comportamiento de la clase
        super(); //siempre hay que llamar super
        this.state = {
            nuevoItemTexto: "",
            arregloItems: []
        }
        this.manejarCambio = this.manejarCambio.bind(this);
        this.agregaEstado = this.agregaEstado.bind(this);
    }
    agregaEstado(){
        this.state.arregloItems.push(this.state.nuevoItemTexto);
        this.setState({nuevoItemTexto:""});
    }
    manejarCambio(e){
        let inputValue = e.target.value;
        this.setState({nuevoItemTexto:inputValue});//metodo crea nuevos estados, dejando un historial de los cambios 
    }
    render() {
        return ( 
            <div className = 'App'>
               <input value = {this.state.nuevoItemTexto} type= "text" onChange={this.manejarCambio}/>
               <button onClick={this.agregaEstado}>Enviar</button>
               <Lista tituloLista="Lista Estado" elementoLista= {this.state.arregloItems}/>
                
            </div>
        );
    }
}

export default App;
