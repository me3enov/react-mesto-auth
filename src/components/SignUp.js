import { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { signUp } from '../utils/auth.js';

const SignUp = ({ setIsRegisterPopupOpen }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    signUp(email, password)
      .then((res) => {
        if (res.data) {
          resetForm();
          setIsRegisterPopupOpen(res);
          history.push('/');
        } else {
          setIsRegisterPopupOpen(res);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='sign root__sign'>
      <h2 className='sign__title'>Регистрация</h2>
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
              Зарегистрироваться
          </button>
          <Link className='sign__link' to='/signin'>
            Уже зарегистрированы? Войти
          </Link>
        </fieldset>
      </form>
    </div>
  );
};

export default SignUp;
