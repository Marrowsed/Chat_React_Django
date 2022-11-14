import React, { useEffect, useState } from 'react'
import UsersDetail from './UsersDetail'

const Users = () => {

    let [list, setList] = useState([''])

    let url = 'http://127.0.0.1:8000'

    useEffect(() => {
        getUsersList()
    }, [])

    let getUsersList = async () => {
        let response = await fetch(`${url}/api/users/`)
        let data = await response.json()
        setList(data)
    }
    
    
  return (
    <aside>
        <ul>
            {list.map((l, index) => (
                <UsersDetail key={index} data={l} />
            ))}
        </ul>
    </aside>
  )
}

export default Users