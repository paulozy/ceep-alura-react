import React, { Component } from 'react'
import './style.css'

export class FormularioCadastro extends Component {

    constructor(props) {
        super(props)
        this.titulo = ''
        this.texto = ''
    }

    _handleMudancaTitulo(e) {
        e.stopPropagation()
        this.titulo = e.target.value
    }

    _handleMudancaTexto(e) {
        e.stopPropagation()
        this.texto = e.target.value
    }

    _criarNota(e) {
        e.preventDefault()
        e.stopPropagation()
        this.props.criarNota(this.titulo, this.texto)
    }

    render() {
        return (
            <form 
                className="form-cadastro"
                onSubmit={this._criarNota.bind(this)}
            >
                <input 
                    type="text" 
                    placeholder="Titulo" 
                    className="form-cadastro-input" 
                    onChange={this._handleMudancaTitulo.bind(this)} 
                />
                <textarea 
                    placeholder="Escreva sua nota"
                    onChange={this._handleMudancaTexto.bind(this)} 
                />
                <button className="form-cadastro-submit">Criar nota</button>
            </form>
        )
    }
}