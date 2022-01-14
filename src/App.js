import React, { Component } from 'react'
import { ListadeNotas } from './components/ListadeNotas'
import { FormularioCadastro } from './components/FormularioCadastro'
import './assets/App.css'
import './assets/index.css';

class App extends Component {

  constructor() {
    super()

    this.state = {
      notas: []
    }
  }

  criarNota(titulo, texto) {
    const novaNota = { titulo, texto }
    const novoArrNotas = [...this.state.notas, novaNota]

    const novoEstado = {
      notas: novoArrNotas
    }

    this.setState(novoEstado)
  }

  deletarNota(index) {
    const notas = this.state.notas
    notas.splice(index, 1)

    this.setState({ notas })
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
        <ListadeNotas 
          notas={this.state.notas}
          deletarNota={this.deletarNota.bind(this)}/>
      </section>
    );
  }
}

export default App;
