import React from 'react'
import './Message.css';

const MessageDetail = ({messages, c}) => {

    let getContactName = (messages) => {
        return messages.contact.name
    }

    let getTime = (messages) => {
        return messages.time
    }

    let getText = (messages) => {
        return messages.text
    }


  return (
            c === 1 ?
                <div className='msg-id' data-is={getContactName(messages) + " - " + getTime(messages)}>
                    <p className='float-end'>{getText(messages)}</p>
                    <br/>
                </div>
            : 
                <div className='msg-v' data-is={getContactName(messages) + " - " + getTime(messages)}>
                    <p className='float-start'>{getText(messages)}</p>
                    <br/>
                </div>
  )
}
export default MessageDetail