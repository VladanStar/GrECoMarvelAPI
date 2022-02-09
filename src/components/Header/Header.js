import React from 'react';
import { Navbar } from 'react-bootstrap';
import style from './Header.module.css';
import logo from '../../images/marvellogo.jpg';

const Header = () => {
    return (
    
        <Navbar className={style.width}>
            <h1 className={style.text}>
                <img  className='marvellogo' src={logo} alt='logo' />
            </h1>
        </Navbar>
    
    )
}

export { Header }