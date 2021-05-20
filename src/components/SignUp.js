import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { registration } from '../utils/auth';
import Sign from './Sign';

function SignUp ({
  routeLinks,
  formAll,
  signConfig,
  signUpConfig,
  onInfoTooltipOpen,
  setIsSuccessSignUp,
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
    onLoading(true)
    registration(email, password)
      .then((res) => {
        history.push(homeLink);
        setIsSuccessSignUp(true)
      })
      .catch((err) => {
        setIsSuccessSignUp(false);
        console.log(err);
      })
      .finally(() => {
        onInfoTooltipOpen(true);
        onLoading(false);
      });
  };

  return (
    <Sign
      email={email}
      password={password}
      formAll={formAll}
      signConfig={signConfig}
      signExpansionConfig={signUpConfig}
      isLoading={isLoading}
      handleSetEmail={handleSetEmail}
      handleSetPassword={handleSetPassword}
      handleSubmit={handleSubmit}
    />
  );
};

export default SignUp;
