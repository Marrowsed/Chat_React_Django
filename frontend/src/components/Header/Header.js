import React from 'react'
import {Container} from 'react-bootstrap'
import logo from '../../assets/logo.svg'


const Header = () => {

    return (
        <>
        <header className="App-header">
            <Container>
            <div className='d-flex bd-highlight mb-3'>
                <img src={logo} className="App-logo" alt="logo" />
                Nome do APP
            </div>
            <hr></hr>
            </Container>
        </header>
        </>
        )
}


export default Header