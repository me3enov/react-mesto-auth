import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { login } from '../utils/auth';
import Sign from './Sign';

function SignIn({
  routeLinks,
  formAll,
  signConfig,
  signInConfig,
  handleSignIn,
  onLoading,
  isLoading }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const { homeLink } = routeLinks;

  function handleSetEmail (value) {
    setEmail(value);
  };

  function handleSetPassword (value) {
    setPassword(value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onLoading(true);
    login (email, password)
      .then((res) => {
        handleSignIn();
        localStorage.setItem('jwt', res.token);
        history.push(homeLink);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => onLoading(false));
  };

  return (
    <Sign
      email={email}
      password={password}
      formAll={formAll}
      signConfig={signConfig}
      signExpansionConfig={signInConfig}
      isLoading={isLoading}
      handleSetEmail={handleSetEmail}
      handleSetPassword={handleSetPassword}
      handleSubmit={handleSubmit}
    />
  );
}

export default SignIn;
