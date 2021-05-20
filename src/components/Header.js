import { useState } from 'react';
import { Route, Link, useHistory } from 'react-router-dom';
import NavBar from './NavBar';

function Header({ loggedIn, userEmail, onQuit }) {
  const [btnMenuActive, setBtnMenuActive] = useState(false);
  const history = useHistory();

  const buttons = {
    signup: { to: '/signin', text: 'Войти' },
    signin: { to: '/signup', text: 'Регистрация' },
    home: { to: '/signin', text: 'ВойтВыйтии' }
  }

  const quit = () => {
    onQuit();
    localStorage.removeItem('jwt');
    history.push('/signin');
  };

  const handleSetBtnMenuActive = () => {
    setBtnMenuActive(!btnMenuActive);
  };

  function getBtnMenuActive ({ buttonData }) {
    return (
      <>
        <div className='header__block-logo'>
          <Link className='header__link' to='/'>
            <div className='header__logo'></div>
          </Link>
          <button
            className={`header__menu-button
            ${btnMenuActive ?
              'header__menu-button_state_close'
              : ''}`}
            type='button'
            onClick={handleSetBtnMenuActive}
          />
        </div>
        <NavBar
          loggedIn={loggedIn}
          btnMenuActive={btnMenuActive}
          userEmail={userEmail}
          buttonData={buttonData}
          quit={quit}/>
      </>
    )
  }

  return (
    <header className='header root__header'>
      <Route path='/signup'>
        {getBtnMenuActive (
          { buttonData: buttons.signup} )}
      </Route>
      <Route path='/signin'>
        {getBtnMenuActive (
          { buttonData: buttons.signin} )}
      </Route>
      <Route exact path='/'>
        {getBtnMenuActive (
          { buttonData: buttons.home} )}
      </Route>
    </header>
  );
}

export default Header;