import React, { Component, PureComponent } from 'react'
import PureComp from './PureComp';
import RegComp from './RegComp';

class ParentComp extends PureComponent {

    constructor(props) {
        super(props)

        this.state = {
            name: 'Danail'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Danail'
            })
        }, 2000);
    }


    render() {
        console.log('Parent comp render');
        return (
            <div>
                Parent Component
                <RegComp name={this.state.name}></RegComp>
                <PureComp name={this.state.name}></PureComp>
            </div>
        )
    }
}

export default ParentComp
