import React from 'react'

function TeamMember({name, bio, role, phoro}){
    return (
        <div className='team-member'>
            <img src={photo} alt={`${name}'s photo`} className='team-photo' />  
            <h3>{name}</h3>   
            <p><strong>Role:</strong> role</p>
            <p>{bio}</p>
            </div>
    )
}

export default TeamMember;