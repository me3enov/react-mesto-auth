import { Link } from 'react-router-dom';

function NavBar ({
  loggedIn,
  btnMenuActive,
  userEmail,
  link,
  btnText,
  btnRouteLinksText,
  navBarConfig,
  quit }) {

  const { btnToHomeText } = btnRouteLinksText;
  const {
    classHeaderBlockSign,
    classHeaderBlockSignOpened,
    classHeaderText,
    classHeaderLink,
    classHeaderTextLink,
    classHeaderTextLinkExit
  } = navBarConfig;

  return (
    <div className={`${classHeaderBlockSign} ${btnMenuActive ? classHeaderBlockSignOpened : ''}`}>
      {loggedIn ?
        <>
          <p className={classHeaderText}>{userEmail}</p>
          <Link className={classHeaderLink} to={link} onClick={quit}>
            <p className={`${classHeaderTextLink} ${classHeaderTextLinkExit}`}>{btnToHomeText}</p>
          </Link>
        </>
        :
        <Link className={classHeaderLink} to={link}>
          <p className={classHeaderTextLink}>{btnText}</p>
        </Link>}
    </div>
  );
}

export default NavBar;