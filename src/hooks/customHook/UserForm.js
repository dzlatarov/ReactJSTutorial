import React from 'react'
import useInput from './hooks/useInput'

function UserForm() {
    const [firstName, bindFirstName, resetFirstName] = useInput('')
    const [lastName, bindLastName, resetLastName] = useInput('')

    const submitHandler = e => {
        e.preventDefault()
        alert(`${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label>First Name</label>
                <input
                    {...bindFirstName}
                />
            </div>
            <div>
                <label>Last Name</label>
                <input
                    {...bindLastName}
                />
            </div>
            <button>Submit</button>
        </form>
    )
}

export default UserForm
