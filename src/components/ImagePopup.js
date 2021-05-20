function ImagePopup ({
  formAll,
  popupConfig,
  imagePopupConfig,
  isOpen,
  card,
  onClose }) {

  const { typeBtn } = formAll;
  const {
    classPopup,
    classPopupOpened,
    classPopupCloseButton
  } = popupConfig;
  const {
    classPopupPlaceImg,
    classPopupImageContainer,
    classPopupCloseButtonPlaceImg,
    classPopupFigure,
    classPopupImage,
    classPopupDescription
  } = imagePopupConfig;

  function handleClickClose(evt) {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  }

  return(
    <div
      className={`${classPopup} ${classPopupPlaceImg} ${isOpen && classPopupOpened}`}
      onClick={handleClickClose}>
      <div className={classPopupImageContainer}>
        <button
          className={`${classPopupCloseButton} ${classPopupCloseButtonPlaceImg}`}
          type={typeBtn}
          onClick={onClose}
        />
        <figure className={classPopupFigure}>
          <img
            className={classPopupImage}
            alt={card?.name}
            src={card?.link}
          />
          <figcaption className={classPopupDescription}>{card?.name}</figcaption>
        </figure>
      </div>
    </div>
  )
}

export default ImagePopup;