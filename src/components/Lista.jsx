import React, {Component} from 'react';
import itemsMenu from './ItemLista.jsx'

export default class Lista extends Component {
    render(){
        let arregloDeLi = this.props.elementoLista.map(
        (textoElemento)=>{
            return <liItem textoItem = {textoElemento}/>
        });
        return (
            <div>
            <h1>{this.props.tituloLista}</h1>
            {arregloDeLi}</div>)
    }
    
} 