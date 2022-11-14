import React, {useEffect, useState} from 'react'
import { Image } from 'react-bootstrap'
import { BsFillMenuButtonWideFill } from "react-icons/bs";

const MessageHeader = () => {

    let [user, setUser] = useState([])

    let url = 'http://127.0.0.1:8000'

    useEffect(() => {
        getUsersDetail()
    }, [])

    let getUsersDetail = async () => {
        let response = await fetch(`${url}/api/users/2/`)
        let data = await response.json()
        setUser(data)
    }

    let getPhoto = (data) => {
        return url + data.photo
    }

  return (
    <div className='row m-0 p-0 position-relative'>
        <div className="card bg-dark">
            <div className="card-header">
                <div className='float-start inline'>
                    <Image src={getPhoto(user)} roundedCircle='true' fluid='true' width={50} height={50} className="float-start"/>
                    <h5 className="card-title float-start ms-3 mt-3">{user.name}</h5><br/><h6 className="card-subtitle text-muted float-start ms-4">Ativa</h6>
                </div>
                <div className="dropdown show">
                    <a id="dropdownMenuLink" data-toggle="dropdown" className="btn btn-sm float-end text-secondary" role="button"><h5><BsFillMenuButtonWideFill/>&nbsp;</h5></a>
                    <div className="dropdown-menu dropdown-menu-right border p-0" aria-labelledby="dropdownMenuLink">		
                        <a className="dropdown-item p-2 text-secondary" href="#">  Profile </a>
                        <hr className="my-1"></hr>
                        <a className="dropdown-item p-2 text-secondary" href="#">  Delete </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MessageHeader