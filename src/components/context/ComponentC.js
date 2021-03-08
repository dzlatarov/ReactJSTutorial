import React, { Component } from 'react'
import ComponentD from './ComponentD'
import { UserProvider } from './UserContext'

class ComponentC extends Component {
    render() {        
        return (
            <div>
                <UserProvider value='Danail'>
                    <ComponentD />
                </UserProvider>
            </div>
        )
    }
}

export default ComponentC
