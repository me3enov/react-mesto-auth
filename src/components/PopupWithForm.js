function PopupWithForm ({ isOpen, onClose, name, title, children, buttonText, onSubmit }) {

  function handleClickClose(evt) {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  }

  return (
    <div
      onClick={handleClickClose}
      className={(isOpen ? `popup popup_place_${name}
        popup_opened` :
        `popup popup_place_${name}`)}>
      <div className="popup__container">
        <button
          type="button"
          className="popup__close-button"
          onClick={onClose}
          aria-label="Закрыть">
        </button>
        <form
          id={`form_place_${name}`}
          className={`form form_place_${name}`}
          name={`form__${name}`}
          noValidate
          onSubmit={onSubmit}>
            <h2 className="form__title">{title}</h2>
            <fieldset className="form__input-container">
              {children}
              <button
              type="submit"
              className="form__submit-button">
                {buttonText}
              </button>
            </fieldset>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm;