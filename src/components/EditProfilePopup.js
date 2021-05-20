import { useState, useContext, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';
import CurrentUserContext from '../contexts/CurrentUserContext';

function EditProfilePopup({
  formAll,
  editProfilePopupConfig,
  popupConfig,
  popupWithFormConfig,
  isOpen,
  onClose,
  onUpdateUser,
  isLoading }) {

  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const {
    typeInputText,
    classInput,
    //classErrorInput,
    classSpan,
    //classErrorSpan
  } = formAll;
  const {
    nameForm,
    titleForm,
    buttonText,
    buttonTextLoading,
    idInputName,
    classInputName,
    nameInputName,
    placeholderInputName,
    minLengthInputName,
    maxLengthInputName,
    idSpanName,
    classSpanName,
    idInputAbout,
    classInputAbout,
    nameInputAbout,
    placeholderInputAbout,
    minLengthInputAbout,
    maxLengthInputAbout,
    idSpanAbout,
    classSpanAbout
  } = editProfilePopupConfig;

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen])

  function handleSubmit(event) {
    event.preventDefault();

    onUpdateUser({
      name: name,
      about: description
    });
  }

  function handleUserName(event) {
    setName(event.target.value)
  }

  function handleUserDescription(event) {
    setDescription(event.target.value)
  }

  return (
    <PopupWithForm
      formAll={formAll}
      popupConfig={popupConfig}
      popupWithFormConfig={popupWithFormConfig}
      name={nameForm}
      title={titleForm}
      buttonText={buttonText}
      buttonTextLoading={buttonTextLoading}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isLoading={isLoading}>
        <input
          id={idInputName}
          className={`${classInput} ${classInputName}`}
          name={nameInputName}
          type={typeInputText}
          placeholder={placeholderInputName}
          minLength={minLengthInputName}
          maxLength={maxLengthInputName}
          required
          value={name ? name : ''}
          onChange={handleUserName}
        />
        <span
          id={idSpanName}
          className={`${classSpan} ${classSpanName}`}
        />
        <input
          id={idInputAbout}
          className={`${classInput} ${classInputAbout}`}
          name={nameInputAbout}
          type={typeInputText}
          placeholder={placeholderInputAbout}
          minLength={minLengthInputAbout}
          maxLength={maxLengthInputAbout}
          required
          value={description ? description : ''}
          onChange={handleUserDescription}
        />
        <span
          id={idSpanAbout}
          className={`${classSpan} ${classSpanAbout}`}
        />
    </PopupWithForm>
  )
}

export default EditProfilePopup;
