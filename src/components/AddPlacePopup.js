import { useState, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup ({
  formAll,
  addPlacePopupConfig,
  popupConfig,
  popupWithFormConfig,
  isOpen,
  onClose,
  onAddPlace,
  isLoading }) {

  const [cardTitle, setCardTitle] = useState('');
  const [cardLink, setCardLink] = useState('');
  const {
    typeInputText,
    typeInputUrl,
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
    idInputLink,
    classInputLink,
    nameInputLink,
    placeholderInputLink,
    idSpanLink,
    classSpanLink
  } = addPlacePopupConfig;

  function handleCardTitle(event) {
    setCardTitle(event.target.value)
  }

  function handleCardLink(event) {
    setCardLink(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault();

    onAddPlace({
      name: cardTitle,
      link: cardLink
    })
  }

  useEffect(() => {
    setCardLink('')
    setCardTitle('')
  }, [isOpen])

  return(
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
          type={typeInputText}
          name={nameInputName}
          placeholder={placeholderInputName}
          minLength={minLengthInputName}
          maxLength={maxLengthInputName}
          required
          onChange={handleCardTitle}
          value={cardTitle ? cardTitle : ''}
        />
        <span
          id={idSpanName}
          className={`${classSpan} ${classSpanName}`}
        />
        <input
          id={idInputLink}
          className={`${classInput} ${classInputLink}`}
          type={typeInputUrl}
          name={nameInputLink}
          placeholder={placeholderInputLink}
          required
          onChange={handleCardLink}
          value={cardLink ? cardLink : ''}
        />
        <span
          id={idSpanLink}
          className={`${classSpan} ${classSpanLink}`}
        />
    </PopupWithForm>
  )
}

export default AddPlacePopup;