import React, { Component } from 'react';
import './App.css';

// const  Hello = (props) => <p> { props.title }</p> 

/*class Hello extends Component {
  render () {
    return <h2> { this.props.title }</h2>
  }
}

class Text extends Component {
  render () {
    const {
      arrayOfNumbers,
      multiply,
      objectWithInfo,
      title
    } = this.props
  
    const mappedNumbers = arrayOfNumbers.map(multiply)
    return (
      <div>
        { title }
        <p> { mappedNumbers.join(', ') }</p>
        <p> { objectWithInfo.key }</p>
      </div>
    )
  }
}*/

class Contador extends Component {
  constructor (props) {
    super() 
    this.state = { contador: props.contadorInicial }
    setInterval(() => {
      this.setState({ contador: this.state.contador + 1 })
    }, 1000)
   }
   render() {
      return  <ContadorNumero numero = { this.state.contador} />
   }
}
 
Contador.defaultProps = {
  contadorInicial: 0
}
class ContadorNumero extends Component {
  render () {
    return <span>{ this.props.numero }</span>
  }
}
class App extends Component {
  render () {
    return (
      <div>
        <p>Primer componente con state </p>
        <Contador contadorInicial = { 100 }/>
      </div>
    )
  }
}

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello title='Hello from props'/>
        <Text
          arrayOfNumbers= { [2, 3, 10] }
          objectWithInfo = { { key: 'First Value', key2: 'otherValue'}}
          isActivated
          multiply={ number => number * 4}
          number = {2}
          text = 'Texto en string'
          title= { <h1> Este es el titulo </h1> } />
      </header>
    </div>
  );
} */

export default App;
