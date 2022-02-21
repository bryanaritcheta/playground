import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../redux'
import ItemContainer from './ItemContainer'

function IceCreamContainer(props) {
  return (
    <div>
        {/* <h2>Number of icecreams - { props.numOfIceCreams }</h2> */}
        <h2>Number of icecreams - <ItemContainer iceCream /></h2>
        <button onClick={ props.buyIceCream }>Buy Icecream</button>
    </div>
  )
}

const mapStateToProps = state => {
    return {
        numOfIceCreams: state.iceCream.numOfIceCreams
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IceCreamContainer)