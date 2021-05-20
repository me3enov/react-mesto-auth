function InfoTooltip ({
  formAll,
  popupConfig,
  InfoTooltipConfig,
  isOpen,
  isSuccess,
  onClose }) {

  const { typeBtn } = formAll;
  const {
    classPopup,
    classPopupOpened,
    classPopupTitle,
    classContainer,
    classPopupCloseButton
  } = popupConfig;
  const {
    classPopupPlaceTooltip,
    classPopupCloseButtonPlaceTooltip,
    classPopupSignIcon,
    classPopupSignIconSuccess,
    classPopupSignIconFail,
    successText,
    failText
  } = InfoTooltipConfig;

  function handleClickClose(evt) {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  }

  return (
    <div
      className={`${classPopup} ${classPopupPlaceTooltip} ${isOpen && classPopupOpened}`}
      onClick={handleClickClose}>
      <div className={classContainer}>
        <button
          className={`${classPopupCloseButton} ${classPopupCloseButtonPlaceTooltip}`}
          type={typeBtn}
          onClick={onClose}>
        </button>
        <div className={`${classPopupSignIcon}
          ${isSuccess ?
          classPopupSignIconSuccess
          : classPopupSignIconFail}`}>
        </div>
        <h2 className={classPopupTitle}>
          {isSuccess ? successText : failText}
        </h2>
      </div>
    </div>
  );
};

export default InfoTooltip;