import React from 'react'
import { NavLink } from 'react-router-dom'

export const Card = ({user}) => {
    return (
    <div className="card">
        <img src={user.avatar_url} alt={user.login} className="card-img-top"/>
        <div className="card-body">
            <h5 className="card-title">{user.login}</h5>
            <NavLink to={`/profile/${user.login}`} className="btn btn-primary">Открыть</NavLink>
        </div>
    </div>
    )
}