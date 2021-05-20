import PopupWithForm from './PopupWithForm';

function ConfirmPopup({
  formAll,
  confirmPopupConfig,
  popupConfig,
  popupWithFormConfig,
  card,
  onDelete,
  isOpen,
  onClose,
  isLoading }) {

  const {
    nameForm,
    titleForm,
    buttonText,
    buttonTextLoading
  } = confirmPopupConfig;

  function handleSubmit(evt) {
    evt.preventDefault();
    onDelete(card);
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
    </PopupWithForm>
  )
}

export default ConfirmPopup;