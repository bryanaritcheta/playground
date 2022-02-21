import React from 'react'
import { connect } from 'react-redux'

function ItemContainer(props) {
    return (
        <>
            <span>{props.item}</span>
        </>
    )
}

const mapStateToProps = (state, ownProps) => {
    const itemState =
        ownProps.cake ? state.cake.numOfCakes :
            ownProps.iceCream ? state.iceCream.numOfIceCreams :
                state.cookie.numOfCookies

    return {
        item: itemState
    }
}

export default connect(mapStateToProps)(ItemContainer)