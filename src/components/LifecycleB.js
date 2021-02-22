import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
        console.log('LifecycleB constructor');
    }

    static getDerivedStateFromProps(state, props) {
        console.log('LifecycleB getDerivedStateFromProps');
        return null;
    }

    componentDidMount(){
        console.log('LifecycleB componentDidMount');
    }

    render() {
        console.log('LifecycleB render');
        return (
            <div>
                LifecycleB
            </div>
        )
    }
}

export default LifecycleB
