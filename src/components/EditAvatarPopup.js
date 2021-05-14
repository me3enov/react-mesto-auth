import React, { useRef, useEffect } from 'react';
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avaRef = useRef('');

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
      name="place_avatar"
      title="Обновить аватар"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}>
        <input
          id="form__input_string_avatar"
          className="form__input form__input_string_avatar"
          type="url"
          name="link"
          placeholder="Ссылка на картинку"
          required
          ref={avaRef}/>
        <span
          id="form__input_string_avatar-error"
          className="form__input-error"/>
      </PopupWithForm>
  )
}

export default EditAvatarPopup;
