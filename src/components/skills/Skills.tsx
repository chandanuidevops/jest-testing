import { SkillsProps } from "./Skills.types";
import { useState, useEffect } from 'react'
export const Skills=(props:SkillsProps)=>{
    const {skills} = props
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    return(
        <>
        <ul>
        {skills.map((skill) => {
          return <li key={skill}>{skill}</li>
        })}
      </ul>
      {isLoggedIn ? (
        <button>Start learning</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
        </>
    )
}