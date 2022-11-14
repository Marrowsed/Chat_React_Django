import React from 'react'
import MessagesPage from './MessagesPage'
import Users from '../components/Body/ListUsers/Users'

const HomePage = () => {

  let user = 1

  return (
      <div className='row'>
        <div className='col'>
          <Users data={user}/>
        </div>
        <div className='col ps-5 me-5'>
          <MessagesPage data={user}/>
        </div>
      </div>
  )
}

export default HomePage