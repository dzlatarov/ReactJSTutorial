import React from 'react'
import Person from './Person'

function NameList() {
    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 35,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Clark',
            age: 31,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Diana',
            age: 28,
            skill: 'Vue'
        }
    ]
    const personList = persons.map(person =>(
        <Person person={person}></Person>
    ))
    return <div>{personList} </div>
}

export default NameList
