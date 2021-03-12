import React, { useContext } from 'react'
import { UserContext, SkillContext } from '../App'

function ComponentF() {

    const user = useContext(UserContext)
    const skill = useContext(SkillContext)

    return (
        <div>
            {user} - {skill}
        </div>
    )
}

export default ComponentF
