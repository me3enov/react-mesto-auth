import { Link } from 'react-router-dom';

function NavBar ({ loggedIn, btnMenuActive, userEmail, buttonData, quit }) {

  return (
    <div className={`header__block-sign ${btnMenuActive ? 'header__block-sign_opened' : ''}`}>
      {loggedIn ?
        <>
          <p className='header__text'>{userEmail}</p>
          <Link className='header__link' to={buttonData.to} onClick={quit}>
            <p className='header__text-link header__text-link_type_exit'>Выйти</p>
          </Link>
        </>
        :
        <Link className='header__link' to={buttonData.to}>
          <p className='header__text-link'>{buttonData.text}</p>
        </Link>}
    </div>
  );
}

export default NavBar;