import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: false
        }
    }
    
    render() {
        if(this.state.isLoggedIn){
            return(
                <div>Welcome Danail</div>
            ) 
        } else {
            return (
                <div>Welcome Guest</div>
            )
        }

        // return (
        //     <div>
                
        //     </div>
        // )
    }
}

export default UserGreeting
