import React, { Component } from 'react';
import { ReactComponent as DeletSvg} from '../../assets/delete.svg'
import './style.css'

export class CardNota extends Component {

    delete() {
        const index = this.props.index
        this.props.deletarNota(index)
    }


    render() {
        return (
            <section className="card-nota">
                <header className="card-nota-cabecalho">
                    <h3 className="card-nota-titulo">{this.props.titulo}</h3>
                    <DeletSvg onClick={this.delete.bind(this)}/>
                </header>
                <p className="card-nota-texto">{this.props.texto}</p>
            </section>
        )
    }
}