function PopupWithForm ({
  formAll,
  popupConfig,
  popupWithFormConfig,
  isOpen,
  onClose,
  name,
  title,
  children,
  buttonText,
  buttonTextLoading,
  onSubmit,
  isLoading }){

  const {
    classForm,
    classFormTitle,
    classFormInputContainer,
    classFormSubmitButton,
    classFormSubmitButtonWhiteLoader,
    typeBtn,
    typeBtnSubmit
  } = formAll;
  const {
    classPopup,
    classPopupOpened,
    classContainer,
    classPopupCloseButton
  } = popupConfig;
  const {
    classPopupPlace,
    classFormPlace,
    classFormName
  } = popupWithFormConfig;

  function handleClickClose(evt) {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  }

  return (
    <div
      onClick={handleClickClose}
      className={`${classPopup} ${classPopupPlace}${name} ${isOpen ?
      classPopupOpened : ''}`}>
      <div className={classContainer}>
        <button
          type={typeBtn}
          className={classPopupCloseButton}
          onClick={onClose}>
        </button>
        <form
          id={`${classFormPlace}${name}`}
          className={`${classForm} ${classFormPlace}${name}`}
          name={`${classFormName}${name}`}
          noValidate
          onSubmit={onSubmit}>
            <h2 className={classFormTitle}>
              {title}
            </h2>
            <fieldset className={classFormInputContainer}>
              {children}
              <button
              type={typeBtnSubmit}
              className={`${classFormSubmitButton} ${isLoading ?
                classFormSubmitButtonWhiteLoader
                : ''}`}>
                {isLoading ?
                buttonTextLoading
                : buttonText}
              </button>
            </fieldset>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm;