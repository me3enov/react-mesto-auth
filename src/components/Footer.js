import { Route } from "react-router-dom";

function Footer() {
  const date = new Date().getFullYear();
  return (
    <>
      <Route exact path='/'>
        <footer className="footer root__footer" aria-label="Footer">
          <p className="footer__copyright">&copy; {date} Артем Мезенов</p>
        </footer>
      </Route>
    </>
  );
}

export default Footer;
