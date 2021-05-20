import { useRef, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({
  formAll,
  editAvatarPopupConfig,
  popupConfig,
  popupWithFormConfig,
  isOpen,
  onClose,
  onUpdateAvatar,
  isLoading }) {

  const avaRef = useRef(null);
  const {
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
    idInputAvatar,
    classInputAvatar,
    nameInputAvatar,
    placeholderInputAvatar,
    idSpanAvatar,
    classSpanAvatar
  } = editAvatarPopupConfig;

  useEffect(() => {
    avaRef.current.value = '';
  }, [isOpen])

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateAvatar({
      avatar: avaRef.current.value
    });
  }

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
          id={idInputAvatar}
          className={`${classInput} ${classInputAvatar}`}
          type={typeInputUrl}
          name={nameInputAvatar}
          placeholder={placeholderInputAvatar}
          required
          ref={avaRef}
        />
        <span
          id={idSpanAvatar}
          className={`${classSpan} ${classSpanAvatar}`}
        />
      </PopupWithForm>
  )
}

export default EditAvatarPopup;
