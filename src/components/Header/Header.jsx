import React, { useState } from 'react'
import classes from './Header.module.css'
import '../../index.css'
import { Link, Route, Routes } from 'react-router-dom'
import Count  from '../../pages/Count/Count'
import Quiz  from '../../pages/Quiz/Quiz'
import Converter from '../../pages/Converter/Converter'
import MainPage from '../../pages/MainPage/MainPage'

export default function Header() {
    const [burger,setBurger] = useState(false)

    function handleBurger(){
        setBurger(!burger)
        if(!burger){
            document.body.classList.add('lock')
        }else{
            document.body.classList.remove('lock')
        }
    }
    return (
    <>
        <header className={`${classes.header}`}>
            <div className={`${classes.header__container}`}>
                <Link to={'/'} class={burger ? [classes.header__logo, classes._active].join(' ') : [classes.header__logo]}><img src="js.svg" alt=""/></Link>
                <div className={`${classes.header__menu}`}>
                    <div onClick={handleBurger} class={burger ? [classes.header__burger, classes._active].join(' ') : [classes.header__burger]}>
                        <span></span>
                    </div>
                    <nav className={burger ? [classes.menu__body, classes._active].join(' ') : [classes.menu__body] }>
                        <ul className={`${classes.menu__list}`}>
                            <li className={`${classes.menu__item}`}><Link to={"/"}>Main</Link></li>
                            <li className={`${classes.menu__item}`}><Link to={"/counter"}>Counter</Link></li>
                            <li className={`${classes.menu__item}`}><Link to={"/quiz"}>Quiz</Link></li>
                            <li className={`${classes.menu__item}`}><Link to={"/converter"}>Converter</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
        <Routes>
            <Route path='/' element={<MainPage/>}></Route>
            <Route path='/counter' element={<Count/>}></Route>
            <Route path='/quiz' element={<Quiz/>}></Route>
            <Route path='/converter' element={<Converter/>}></Route>
        </Routes>

    </>
  )
}