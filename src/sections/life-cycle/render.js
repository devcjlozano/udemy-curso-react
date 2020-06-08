import React, { Component } from 'react';

const HellowRender = (props) => <h1> Hola Render</h1>
class Render extends Component {
  constructor(props) {
    console.log('constructor')
    super(props)
    this.state = { mensaje: 'mensaje inicial'}
  }
  componentDidMount() {
    console.log('ComponentDidMount')
  }

  render() {
    console.log('render')
    return (
      <div>
        <h4> Elemento DOM aquí</h4>
        <HellowRender />
        <p> Justo debajo de un componente de React </p>
      </div>
    )
  }
}

export default Render