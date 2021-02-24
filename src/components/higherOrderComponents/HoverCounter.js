import React, { Component } from 'react'
import withCounter from './withCounter'

class HoverCounter extends Component {
    render() {
        const { count, countHandler } = this.props
        return (
            <h2 onMouseOver={countHandler}>{this.props.name} Hovered {count} times</h2>
        )
    }
}

export default withCounter(HoverCounter, 10)
