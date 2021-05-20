import { useState } from 'react';
import { Route, Link, useHistory } from 'react-router-dom';
import NavBar from './NavBar';

function Header({
  loggedIn,
  userEmail,
  routeLinks,
  formAll,
  btnRouteLinksText,
  headerConfig,
  navBarConfig,
  onQuit }) {

  const [btnMenuActive, setBtnMenuActive] = useState(false);
  const history = useHistory();
  const { typeBtn } = formAll;
  const {
    signUpLink,
    signInLink,
    homeLink
  } = routeLinks;
  const {
    btnToSignUpText,
    btnToSignInText,
    btnToHomeText
  } = btnRouteLinksText;
  const {
    classHeader,
    classHeaderBlockLogo,
    classHeaderLink,
    classHeaderLogo,
    classHeaderMenuButton,
    classHeaderMenuButtonClose
  } = headerConfig;

  const quit = () => {
    onQuit();
    localStorage.removeItem('jwt');
    history.push(signInLink);
  };

  const handleSetBtnMenuActive = () => {
    setBtnMenuActive(!btnMenuActive);
  };

  function getBtnMenuActive (props) {
    return (
      <>
        <div className={classHeaderBlockLogo}>
          <Link className={classHeaderLink} to={homeLink}>
            <div className={classHeaderLogo}></div>
          </Link>
          <button
            className={`${classHeaderMenuButton}
            ${btnMenuActive ?
              classHeaderMenuButtonClose
              : ''}`}
            type={typeBtn}
            onClick={handleSetBtnMenuActive}
          />
        </div>
        <NavBar
          loggedIn={loggedIn}
          btnMenuActive={btnMenuActive}
          userEmail={userEmail}
          link={props.link}
          btnText={props.btnText}
          btnRouteLinksText={btnRouteLinksText}
          navBarConfig={navBarConfig}
          quit={quit}
        />
      </>
    )
  }

  return (
    <header className={classHeader}>
      <Route path={signUpLink}>
        {getBtnMenuActive ({
          link: signInLink,
          btnText: btnToSignInText
        })}
      </Route>
      <Route path={signInLink}>
        {getBtnMenuActive ({
          link: signUpLink,
          btnText: btnToSignUpText
        })}
      </Route>
      <Route exact path={homeLink}>
        {getBtnMenuActive ({
          link: homeLink,
          btnText: btnToHomeText
        })}
      </Route>
    </header>
  );
}

export default Header;