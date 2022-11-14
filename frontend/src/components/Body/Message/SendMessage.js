import React, { useState } from 'react'
import "./SendMessage.css"
import { BsChatDots } from "react-icons/bs";


const SendMessage = () => {

    let [text, setText] = useState('')


    let url = 'http://127.0.0.1:8000'

    const handleChange = (e) =>{
        setText(e.target.value)
    }
  
    const handleSubmit = (e) => {
      e.preventDefault()
      sendText()
      setText('')
  }
  
  
  let sendText = async () => {
      fetch(`${url}/api/messages/1/2/`, {
          method: "POST",
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              "text": (text),
              "contact": 1,
              "other_contact": 2,
              "state": false
        })
      })
  }

  return (
    <div className="w-100 card-footer border bg-light textWrite">		
        <form className='m-0 p-0' onSubmit={handleSubmit} method="POST" autoComplete='off'>
            <div className="row m-0 p-0">
                <div className="col-11 m-0 p-1">
                    <input id="text" onChange={handleChange} className="mw-100 border rounded form-control" type="text" name="text" title="Send a Message" placeholder="Send a Message..." value={text} required/>
                </div>
                <div className="col-1 m-0 p-1">		
                    <button id='sendText' className="btn btn-outline-secondary rounded border w-100" type='submit'><BsChatDots/></button>
                </div>
            </div>
        </form>
	</div>
  )
}
export default SendMessage