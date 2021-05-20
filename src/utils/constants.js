//auth url for auth.js
export const authUrl = 'https://auth.nomoreparties.co';

//api config for class Api in api.js
export const apiConfig = {
  authorization: '08402336-c176-4b17-bc07-4e156c9de6bc',
  url: 'https://mesto.nomoreparties.co/v1/cohort-21',
  cardsUrl: '/cards',
  cardsLikesUrl: '/cards/likes/',
  userAvatarUrl: '/users/me/avatar',
  userInfoUrl: '/users/me',
  errorText: 'Ошибка:'
};

//route page links
export const routeLinks = {
  signUpLink: '/signup',
  signInLink: '/signin',
  homeLink: '/'
};

export const btnRouteLinksText = {
  btnToSignInText: 'Войти',
  btnToSignUpText: 'Регистрация',
  btnToHomeText: 'Выйти',
};

//config for all auth
export const signConfig = {
  classSign: 'sign root__sign',
  classSignTitle: 'sign__title',
  classSignAuthBox: 'sign__auth-box',
  classSignLink: 'sign__link',
  classFormTypeSign: 'form_type_sign',
  classInputSign: 'form__input_place_sign',
  classFormSubmitButtonSign: 'form__submit-button_place_sign'
};

//config for all pop-ups
export const popupConfig = {
  classPopup: 'popup',
  classPopupOpened: 'popup_opened',
  classPopupTitle: 'popup__title',
  classContainer: 'popup__container',
  classPopupCloseButton: 'popup__close-button'
};

//config for all forms
export const formAll = {
  classForm: 'form',
  classFormTitle: 'form__title',
  classFormInputContainer: 'form__input-container',
  classFormSubmitButton: 'form__submit-button',
  classFormSubmitButtonWhiteLoader: 'form__submit-button_loading-white-icon',
  classFormSubmitButtonBlackLoader: 'form__submit-button_loading-black-icon',
  typeBtn: 'button',
  typeBtnSubmit: 'submit',
  typeInputText: 'text',
  typeInputUrl: 'url',
  typeInputEmail: 'email',
  typeInputPass: 'password',
  classInput: 'form__input',
  classErrorInput: 'form__input_type_error',
  classSpan: 'form__input-error',
  classErrorSpan: 'form__input-error_active'
};

//config for Card in Card.js
export const cardConfig = {
  classCard: 'card',
  classCardImage: 'card__image',
  classCardTitle: 'card__title',
  classCardLikeContainer: 'card__like-container',
  classCardLikeCount: 'card__like-count',
  classDeleteBtn: 'card__bin',
  classDeleteBtnActive: 'card__bin__visible',
  classLikeBtn: 'card__like',
  classLikeBtnLiked: 'card__like_state_liked'
};

//config for AddPlacePopup in AddPlacePopup.js
export const addPlacePopupConfig = {
  nameForm: 'add',
  titleForm: 'Новое место',
  buttonText: 'Создать',
  buttonTextLoading: 'Создание...',

  idInputName: 'form__input_string_title',
  classInputName: 'form__input_string_title',
  nameInputName: 'name',
  placeholderInputName: 'Название',
  minLengthInputName: '2',
  maxLengthInputName: '30',
  idSpanName: 'form__input_string_title-error',
  classSpanName: 'form__input-error_string_title',

  idInputLink: 'form__input_string_link',
  classInputLink: 'form__input_string_link',
  nameInputLink: 'link',
  placeholderInputLink: 'Ссылка на картинку',
  idSpanLink: 'form__input_string_link-error',
  classSpanLink: 'form__input-error_string_link'
};

//config for ConfirmPopup in ConfirmPopup.js
export const confirmPopupConfig = {
  nameForm: 'confirm',
  titleForm: 'Вы уверены?',
  buttonText: 'Да',
  buttonTextLoading: 'Удаление...'
};

//config for EditAvatarPopup in EditAvatarPopup.js
export const editAvatarPopupConfig = {
  nameForm: 'avatar',
  titleForm: 'Обновить аватар',
  buttonText: 'Сохранить',
  buttonTextLoading: 'Сохранение...',

  idInputAvatar: 'form__input_string_avatar',
  classInputAvatar: 'form__input_string_avatar',
  nameInputAvatar: 'link',
  placeholderInputAvatar: 'Ссылка на картинку',
  idSpanAvatar: 'form__input_string_avatar-error',
  classSpanAvatar: 'form__input-error_string_avatar'
};

//config for EditProfilePopup in EditProfilePopup.js
export const editProfilePopupConfig = {
  nameForm: 'edit',
  titleForm: 'Редактировать профиль',
  buttonText: 'Сохранить',
  buttonTextLoading: 'Сохранение...',

  idInputName: 'form__input_string_name',
  classInputName: 'form__input_string_name',
  nameInputName: 'name',
  placeholderInputName: 'Имя',
  minLengthInputName: '2',
  maxLengthInputName: '40',
  idSpanName: 'form__input_string_name-error',
  classSpanName: 'form__input-error_string_name',

  idInputAbout: 'form__input_string_job',
  classInputAbout: 'form__input_string_job',
  nameInputAbout: 'about',
  placeholderInputAbout: 'О себе',
  minLengthInputAbout: '2',
  maxLengthInputAbout: '200',
  idSpanAbout: 'form__input_string_job-error',
  classSpanAbout: 'form__input-error_string_job'
};

//config for Footer in Footer.js
export const footerConfig = {
  classFooter: 'footer root__footer',
  ariaLabelFooter: 'Footer',
  classFooterCopyright: 'footer__copyright',
  footerText: 'Артем Мезенов'
};

//config for Header in Header.js
export const headerConfig = {
  classHeader: 'header root__header',
  classHeaderBlockLogo: 'header__block-logo',
  classHeaderLink: 'header__link',
  classHeaderLogo: 'header__logo',
  classHeaderMenuButton: 'header__menu-button',
  classHeaderMenuButtonClose: 'header__menu-button_state_close'
};

//config for ImagePopup in ImagePopup.js
export const imagePopupConfig = {
  classPopupPlaceImg: 'popup_place_img',
  classPopupImageContainer: 'popup__image-container',
  classPopupCloseButtonPlaceImg: 'popup__close-button_place_img',
  classPopupFigure: 'popup__figure',
  classPopupImage: 'popup__image',
  classPopupDescription: 'popup__description'
};

//config for InfoTooltip in InfoTooltip.js
export const InfoTooltipConfig = {
  classPopupPlaceTooltip: 'popup_place_tooltip',
  classPopupCloseButtonPlaceTooltip: 'popup__close-button_place_tooltip',
  classPopupSignIcon: 'popup__sign-icon',
  classPopupSignIconSuccess: 'popup__sign-icon_type_success',
  classPopupSignIconFail: 'popup__sign-icon_type_fail',
  successText: 'Вы успешно зарегистрировались!',
  failText: 'Что-то пошло не так! Попробуйте ещё раз.'
};

//config for Main in Main.js
export const mainConfig = {
  classContent: 'content',

  classProfile: 'profile root__profile',
  classProfileAvatar: 'profile__avatar',
  classProfileLine: 'profile__line',
  classProfileName: 'profile__name',
  classProfileEditButton: 'profile__edit-button',
  classProfileJob: 'profile__job',
  classProfileAddButton: 'profile__add-button',

  classCards: 'cards',
  ariaLabelCards: 'Cards',
  classGallery: 'gallery'
};

//config for NavBar in NavBar.js
export const navBarConfig = {
  classHeaderBlockSign: 'header__block-sign',
  classHeaderBlockSignOpened: 'header__block-sign_opened',
  classHeaderText: 'header__text',
  classHeaderLink: 'header__link',
  classHeaderTextLink: 'header__text-link',
  classHeaderTextLinkExit: 'header__text-link_type_exit'
};

//config for PopupWithForm in PopupWithForm.js
export const popupWithFormConfig = {
  classPopupPlace: 'popup_place_',
  classFormPlace: 'form_place_',
  classFormName: 'form__'
};

//config for SignIn in SignIn.js
export const signInConfig = {
  signExpansionLink: '/signup',
  titleText: 'Вход',
  buttonText: 'Войти',
  buttonTextLoading: 'Вход...',
  linkText: 'Ещё не зарегистрированы? Регистрация',

  idInputSignExpansionEmail: 'form__input_string_sign-in-email',
  classInputSignExpansionEmail: 'form__input_place_sign-in-email',
  nameInputSignExpansionEmail: 'sign-in-email',
  placeholderInputSignExpansionEmail: 'Email',
  minLengthInputSignExpansionEmail: '5',
  maxLengthInputSignExpansionEmail: '40',
  idSpanSignExpansionEmail: 'form__input_string_sign-in-email-error',
  classSpanSignExpansionEmail: 'form__input-error_string_sign-in-email',

  idInputSignExpansionPassword: 'form__input_string_sign-in-password',
  classInputSignExpansionPassword: 'form__input_place_sign-in-password',
  nameInputSignExpansionPassword: 'sign-in-password',
  placeholderInputSignExpansionPassword: 'Пароль',
  minLengthInputSignExpansionPassword: '3',
  maxLengthInputSignExpansionPassword: '40',
  idSpanSignExpansionPassword: 'form__input_string_sign-in-password-error',
  classSpanSignExpansionPassword: 'form__input-error_string_sign-in-password'
};

//config for SignUp in SignUp.js
export const signUpConfig = {
  signExpansionLink: '/signin',
  titleText: 'Регистрация',
  buttonText: 'Зарегистрироваться',
  buttonTextLoading: 'Регистрация...',
  linkText: 'Уже зарегистрированы? Войти',

  idInputSignExpansionEmail: 'form__input_string_sign-up-email',
  classInputSignExpansionEmail: 'form__input_place_sign-up-email',
  nameInputSignExpansionEmail: 'sign-up-email',
  placeholderInputSignExpansionEmail: 'Email',
  minLengthInputSignExpansionEmail: '5',
  maxLengthInputSignExpansionEmail: '40',
  idSpanSignExpansionEmail: 'form__input_string_sign-up-email-error',
  classSpanSignExpansionEmail: 'form__input-error_string_sign-up-email',

  idInputSignExpansionPassword: 'form__input_string_sign-up-password',
  classInputSignExpansionPassword: 'form__input_place_sign-up-password',
  nameInputSignExpansionPassword: 'sign-up-password',
  placeholderInputSignExpansionPassword: 'Пароль',
  minLengthInputSignExpansionPassword: '3',
  maxLengthInputSignExpansionPassword: '40',
  idSpanSignExpansionPassword: 'form__input_string_sign-up-password-error',
  classSpanSignExpansionPassword: 'form__input-error_string_sign-up-password'
};