import React, { Component } from 'react'

class BotonQueLanzaError extends Component {
  state = { throwError: false }

  render() {
    if (this.state.throwError) {
      throw new Error('Error lanzado por el botón')
    }
    return (
      <button onClick={() => this.setState({throwError: true })}>
        Lanzar error
      </button>
    )
  }
}
class EjemploDeComponenteDidCatch extends Component {
  state = { hasError: false, errorMsg: '' }

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true, erroMsg: error.toString() })
  }

  render() {
    if( this.state.hasError) {
      return (
        <div>
          <p> Error en el componente: { this.state.erroMsg } </p>
          <button onClick={() => this.setState({hasError: false})}>
            Volver a la aplicación
          </button>
        </div>
      )
    }
    return (
      <div>
        <h4>Ciclo de desmontaje: componentDidCatch </h4>
        <BotonQueLanzaError />
      </div>
    )
  }
}
export default EjemploDeComponenteDidCatch