import { Route } from 'react-router-dom';

function Footer({
  routeLinks,
  footerConfig }) {

  const currentYear = new Date().getFullYear();
  const { homeLink } = routeLinks;
  const {
    classFooter,
    ariaLabelFooter,
    classFooterCopyright,
    footerText
  } = footerConfig;
  return (
    <>
      <Route exact path={homeLink}>
        <footer className={classFooter} aria-label={ariaLabelFooter}>
          <p className={classFooterCopyright}>&copy;{`${currentYear} ${footerText}`}</p>
        </footer>
      </Route>
    </>
  );
}

export default Footer;
