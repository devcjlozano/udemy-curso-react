import React, { Component} from 'react'
import PropTypes from 'prop-types'

const ANIMAL_IMAGES = {
  panda: 'https://goo.gl/oNbtoq',
  cat: 'https://goo.gl/PoQQXb',
  dolphin: 'https://goo.gl/BbiKCd'
}

const ANIMALS = Object.keys(ANIMAL_IMAGES)

class AnimalImage extends Component {
  state = { src: ANIMAL_IMAGES[this.props.animal]}

  componentWillReceiveProps(nextProps) {
    this.setState({src: ANIMAL_IMAGES[nextProps.animal]})
  }
  shouldComponentUpdate (nextProps) {
    return this.props.animal !== nextProps.animal
  }
  componentWillUpdate (nextProps, nextState) {
    const img = document.querySelector('img')
    img.animate( [
      {
       filter: 'blur(0px)' 
      }, {
        filter: 'blur(2px)'
      }], {
        duration: 500,
        easing: 'ease'
      })
  }
  componentDidUpdate (prevProps, prevState) {
    const img = document.querySelector('img')
    img.animate( [
      {
       filter: 'blur(2px)' 
      }, {
        filter: 'blur(0px)'
      }], {
        duration: 1500,
        easing: 'ease'
      })
  }

  render() {
    return (
      <div>
        <p>Selected {this.props.animal}</p>
        <img
          alt= {this.props.animal}
          src={this.state.src}
          width='250'/>
      </div>
    )
  }
}
AnimalImage.propTypes = {
  animal: PropTypes.oneOf(Object.keys(ANIMALS))
}

class EjemploDeCicloDeActualizacion extends Component {
  state = { animal: 'panda' }
  _renderAnimalButton = animal => {
    return (
      <button 
        key={animal}
        // disabled={this.state.animal === animal}
        onClick={()=>this.setState({ animal })}>
        {animal}
      </button>
    )
  }
  render () {
    return (
      <div>
       <h4> Ciclo de actualización , Ejemplo de: should Component Update</h4>
       {ANIMALS.map(this._renderAnimalButton)}
       <AnimalImage animal={this.state.animal}/>
      </div>
    )
  }
}
export default EjemploDeCicloDeActualizacion