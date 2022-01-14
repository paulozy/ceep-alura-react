import React, { Component } from 'react'
import { CardNota } from '../CardNota'
import './style.css'

export class ListadeNotas extends Component {

    render() {
        return (
            <ul className="lista-notas">
                {this.props.notas
                    .map((nota, index) => {
                        return (
                            <li key={index} className="lista-notas-item">
                                <CardNota 
                                    index={index}
                                    titulo={nota.titulo}
                                    texto={nota.texto}
                                    deletarNota={this.props.deletarNota}
                                />
                            </li>
                        )
                    })}
            </ul>
        )
    }
}
