import React, { useContext, useState } from 'react' 
import { AlertContext } from '../context/alert/alertContext'
import { GithubContext } from '../context/github/githubContext'


export const Search = () => {
  const github = useContext(GithubContext)
  const {show, hide} = useContext(AlertContext)

  const [value, setValue] = useState('')
  
  const onSumbit = (event) => {
    if (event.key !== 'Enter') {
      return
    } 

    github.clearUsers()

    if (value) {
      hide()
      github.search(value.trim())
    } else {
      show('Введите данные пользователя')
    }
  }

    return (
        <div className="form-group">
          <input
            type="text"
            value={value}
            onChange={event => {setValue(event.target.value)}}
            className="form-control"
            placeholder="введите ник пользователя..."
            onKeyPress={onSumbit}
          />
        </div>
    )
}