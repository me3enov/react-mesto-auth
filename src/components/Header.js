import React, { useState } from 'react';
import { Route, Link, useHistory } from "react-router-dom";
import NavBar from "./NavBar";

function Header({ loggedIn, userEmail, onQuit }) {
  const [width, setWidth] = useState(0);
  const [btnMenuActive, setBtnMenuActive] = useState(false);
  const history = useHistory();

  const buttons = [
    { from: '/signup', to: '/signin', text: 'Войти' },
    { from: '/signin', to: '/signup', text: 'Регистрация' },
    { from: '/', to: '/signin', text: 'Выйти' }
  ]

  const getButtonData = (buttons, from) => {
    const button = buttons.find((elem) => elem.from === from)
    if (!button) return null
    return button;
  }

  React.useEffect(() => {
    function resizeListener (e) {
      setWidth(e.target.innerWidth)
    }
    window.addEventListener('resize', resizeListener)
    return () => {
      window.removeEventListener('resize', resizeListener)
    }
  }, [])

  React.useEffect(() => {
    setWidth(window.innerWidth)
    if (width > 709) setBtnMenuActive(false)
  }, [width])

  const quit = () => {
    onQuit();
    localStorage.removeItem('jwt');
    history.push('/signin');
  };

  function getBtnMenuActive ({ width, buttonData }) {
    if (width < 710) {
      return (
        !btnMenuActive ? (
          <div className='header__block-logo'>
            <Link className='header__link' to='/'>
              <div className='header__logo'></div>
            </Link>
            <button
              className="header__menu-button"
              type="button"
              onClick={() => setBtnMenuActive(true)}
            />
          </div>
        ) : (
        <>
          <NavBar
            loggedIn={loggedIn}
            userEmail={userEmail}
            buttonData={buttonData}
            quit={quit}/>
          <div className='header__block-logo'>
            <Link className='header__link' to='/'>
              <div className='header__logo'></div>
            </Link>
            <button
              className="header__menu-button header__menu-button_state_close"
              type="button"
              onClick={() => setBtnMenuActive(false)}
            />
          </div>
        </>
        )
      )
    }
    else{
      return (
        <>
          <div className='header__block-logo'>
            <Link className='header__link' to='/'>
              <div className='header__logo'></div>
            </Link>
          </div>
          <NavBar
            loggedIn={loggedIn}
            userEmail={userEmail}
            buttonData={buttonData}
            quit={quit}/>
        </>
      )
    }
  }

  return (
    <header className='header root__header'>
      <Route path='/signup'>
        {getBtnMenuActive (
          {width,
          buttonData: getButtonData(buttons, '/signup')})}
      </Route>
      <Route path='/signin'>
        {getBtnMenuActive (
          {width,
          buttonData: getButtonData(buttons, '/signin')})}
      </Route>
      <Route exact path='/'>
        {getBtnMenuActive (
          {width,
          buttonData: getButtonData(buttons, '/')})}
      </Route>
    </header>
  );
}

export default Header;