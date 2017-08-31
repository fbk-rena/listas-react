import React from 'react';
//componente li
export default class liItem extends React.Component{
    render(){
        return (
        <li>{this.props.textoItem}</li>)
    }
}