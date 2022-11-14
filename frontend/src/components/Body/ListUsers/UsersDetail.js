import React, { useEffect, useState } from 'react'
import { Button, Image } from 'react-bootstrap'
import {Link, Router} from 'react-router-dom'

const UsersDetail = ({data}) => {

    let [message, setMessage] = useState([''])

    useEffect(() => {
        getMessage()
    }, [])

    let url = 'http://127.0.0.1:8000'

    let getPhoto = (data) => {
        return url + data.photo
    }

    let getName = (data) => {
        return data.name
    }

    let getMessage = async () => {
        let response = await fetch(`${url}/api/messages/1/`)
        let data = await response.json()
        setMessage(data)
    }


  return (
    <aside>
        <ul>
            <>
            <li className='d-flex'>
            <Image src={getPhoto(data)} fluid="true" roundedCircle="true"  width={50}/>
            <h3 className='mt-3 ms-3'>{getName(data)}</h3><br/>
            <p className='mt-3 ms-3'>{message.text}</p>
            <Button variant="outline-success" size="sm" className='ms-auto bd-highlight'>Reply</Button>
            </li>
            <hr></hr>
            </>
        </ul>
    </aside>
  )
}

export default UsersDetail