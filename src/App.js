import React, { Component } from 'react';
import cars from './data/cars.json';
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

class CardItem extends Component {
  render () {
    const { car, id }  = this.props
    return (
      <li>
        <p> key: {id} </p>
        <p> <strong>Nombre: </strong>{ car.name }</p>
        <p> <strong>Company: </strong>{ car.company }</p>
      </li>
    )
  }
}
class App extends Component {
  render () {
    const numbers = [1 ,1, 3, 4, 5]

    return (
     <div className='App' > 
       <h4> Trabajando con listas</h4>
       {numbers.map((number, index) => {
         return <p key={index}> Soy el numero { number} </p>
       })}
       <h4> Trabajando con listas de objetos</h4>
      <ul>
        {
           cars.map(car => {
             return <CardItem id={car.id} key={car.id} car={car}/>
           })
        }
      </ul>
     </div>
    )
  }
}


/*class App extends Component {
  render () {
    return (
      <div>
        <ConditionalSection/>
      </div>
    )
  }
}*/

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
