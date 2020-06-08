import React, { Component } from 'react'

/*class BitCoinPrice extends Component {
  _renderCurrencies () {
    const { bpi } = this.props

    const currencies = Object.keys(bpi)
    return currencies.map(currency => (
      <div key={currency}>
          1BTC is {bpi[currency].rate}
          <span> {currency}</span>
      </div>)
    )
  }
  
  render () {
    return (
      <div>
        <h4> Bitcoin Price </h4>
        {this._renderCurrencies()}
       </div>
    )
  }
}*/

const _renderCurrencies = bpi => (
  Object.keys(bpi).map(currency => (
  <div key={currency}>
     1BTC is {bpi[currency].rate}
     <span> {currency}</span>
  </div>))
)

const BitCoinPrice = ({bpi}) =>(
  <div>
   <h4> Bitcoin Price Index </h4>  
   {_renderCurrencies(bpi)}
  </div>
 
)

export default BitCoinPrice