import React, { useState, useEffect } from 'react'
import MessageHeader from '.././components/Body/Message/MessageHeader'
import MessageDetail from '.././components/Body/Message/MessageDetail'
import SendMessage from '.././components/Body/Message/SendMessage'

const MessagesPage = () => {

  useEffect(() => {
    getIdMessage()
    getVMessage()    
}, [idmessage, vmessage])

  let [idmessage, setIdmessage] = useState([])
  let [vmessage, setVmessage] = useState([])

    let url = 'http://127.0.0.1:8000'

    let getIdMessage = async () => {
        let response = await fetch(`${url}/api/messages/1/2/`)
        let data = await response.json()
        setIdmessage(data)
        //setIdmessage(data)
    }

    let getIdName = (idmessage) => {
        return idmessage.map((m) => (
            m.contact.name
        ))
    }

    let getVName = (vmessage) => {
        return vmessage.map((m) => (
            m.contact.name
        ))
    }

    let getVMessage = async () => {
        let response = await fetch(`${url}/api/messages/2/1/`)
        let data = await response.json()
        setVmessage(data)
        //setVmessage(data);
    }

    let messages = [...idmessage, ...vmessage].sort((a,b) => {
      return a.time.localeCompare(b.time);
  })

  console.log(messages)


  return (
    <>
    <MessageHeader/>
        <div className="card bg-dark card-body messages">
            {messages.map((m, index) => (
                m.contact.name === getIdName(idmessage)[0] ?
                <MessageDetail messages={m} key={index} c={1}/>  
                : m.contact.name === getVName(vmessage)[0] ? 
                <MessageDetail messages={m} key={index} c={2}/> 
                : null
            ))
            }
        <SendMessage/>
        </div>
    </>
  )
}

export default MessagesPage