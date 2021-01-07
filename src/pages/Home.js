import React, { useContext } from 'react' 
import { Card } from '../Components/Card'
import { Search } from '../Components/Search'
import { GithubContext } from '../context/github/githubContext'

export const Home = () => {
    const {users, loading} = useContext(GithubContext)
    if (loading) {
        return <p className="text-center">Загрузка...</p>
    }
    return (
        <React.Fragment>
            <Search/>

            <div className="row">
                {users.map((user) => {
                    return <div className="col-sm-4 mb4" key={user.id}>
                    <Card user={user}/>
                    </div>
                })}
            </div>

        </React.Fragment>
    )
}