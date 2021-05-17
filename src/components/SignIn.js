import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { signIn } from '../utils/auth.js';

function Login({ handleSignIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    signIn (email, password)
      .then((res) => {
        handleSignIn();
        localStorage.setItem('jwt', res.token);
        history.push('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='sign root__sign'>
      <h2 className='sign__title'>Вход</h2>
      <form className='form form_type_sign' onSubmit={handleSubmit}>
        <fieldset className='sign__auth-box'>
          <input
            type='email'
            className='form__input form__input_place_sign'
            placeholder='Email'
            required={true}
            onChange={(evt) => setEmail(evt.target.value)}
          />
          <input
            type='password'
            className='form__input form__input_place_sign'
            placeholder='Пароль'
            required={true}
            onChange={(evt) => setPassword(evt.target.value)}
          />
        </fieldset>
        <fieldset className='sign__auth-box'>
          <button
            type='submit'
            className='form__submit-button form__submit-button_place_sign'>
              Войти
          </button>
          <Link className='sign__link' to='/signup'>
            Ещё не зарегистрированы? Регистрация
          </Link>
        </fieldset>
      </form>
    </div>
  );
}

export default Login;
