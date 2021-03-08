import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

class ComponentE extends Component {
    render() {
        return (
            <UserConsumer>
                {
                    (name) => {
                        return <div>Hello {name}</div>
                    }
                }
            </UserConsumer>
        )
    }
}

export default ComponentE
