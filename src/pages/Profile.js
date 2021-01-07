import React, { useContext, useEffect } from 'react' 
import { Repos } from '../Components/Repos'
import { GithubContext } from '../context/github/githubContext'

export const Profile = (props) => {
    const {getUser, getRepos, loading, user, repos } = useContext(GithubContext)
    const url_name = props.match.params.name

    useEffect(() => {
        getUser(url_name)
        getRepos(url_name)
        // eslint-disable-next-line 
    }, [])
    
    if (loading) {
        return <p className="text-center">Загрузка...</p>
    }

    const {
        name, company, avatar_url,
        location, bio, blog, 
        login, html_url, followers, 
        public_repos, public_gists, following
    } = user

    return (
        <>
        <div className="card mb-4">
            <div className="card-body">
                <div className="row">
                    <div className="col-sm-3 text-center">
                        <img src={avatar_url} alt={name} style={{width: "150px"}}/>
                        <h1>{name}</h1>
                        {location && <p>Местоположение: {location}</p>}
                    </div>
                    <div className="col">
                        {bio && <>
                            <h3>BIO</h3>
                            <p>{bio}</p>
                        </>}
                        <a href={html_url} 
                        target="_blank" 
                        rel="noreferrer"
                        className="btn btn-dark"
                        >Открыть профиль</a>
                        <ul>
                            {login && <li>
                                <strong>Username:</strong> {login}
                            </li>}
                            {company && <li>
                                <strong>Company:</strong> {company}
                            </li>}
                            {blog && <li>
                                <strong>Website:</strong> {blog}
                            </li>}
                        </ul>

                        <div className="badge badge-primary">Подписчики: {followers}</div>
                        <div className="badge badge-success">Подписан: {following}</div>
                        <div className="badge badge-info">Репозитории: {public_repos}</div>
                        <div className="badge badge-dark">Gists: {public_gists}</div>
                    </div>
                </div>
            </div>
        </div>
        <Repos repos={repos}/>
        </>
    )
}