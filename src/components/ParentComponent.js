import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            parentName: 'Parent'
        }

        this.parentHandler = this.parentHandler.bind(this)
    }

    parentHandler(childName) {
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }

    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.parentHandler}></ChildComponent>
            </div>
        )
    }
}

export default ParentComponent
