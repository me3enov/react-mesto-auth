import { Link } from 'react-router-dom';

function Sign ({
  email,
  password,
  formAll,
  signConfig,
  signExpansionConfig,
  isLoading,
  handleSetEmail,
  handleSetPassword,
  handleSubmit }) {

  const {
    classForm,
    typeInputEmail,
    typeInputPass,
    typeBtnSubmit,
    classFormSubmitButton,
    classFormSubmitButtonBlackLoader,
    classInput,
    //classErrorInput,
    classSpan,
    //classErrorSpan
  } = formAll;
  const {
    classSign,
    classSignTitle,
    classSignAuthBox,
    classSignLink,
    classFormTypeSign,
    classInputSign,
    classFormSubmitButtonSign,
  } = signConfig;
  const {
    signExpansionLink,
    titleText,
    buttonText,
    buttonTextLoading,
    linkText,
    idInputSignExpansionEmail,
    classInputSignExpansionEmail,
    nameInputSignExpansionEmail,
    placeholderInputSignExpansionEmail,
    minLengthInputSignExpansionEmail,
    maxLengthInputSignExpansionEmail,
    idSpanSignExpansionEmail,
    classSpanSignExpansionEmail,
    idInputSignExpansionPassword,
    classInputSignExpansionPassword,
    nameInputSignExpansionPassword,
    placeholderInputSignExpansionPassword,
    minLengthInputSignExpansionPassword,
    maxLengthInputSignExpansionPassword,
    idSpanSignExpansionPassword,
    classSpanSignExpansionPassword
  } = signExpansionConfig;

  return (
    <div className={classSign}>
      <h2 className={classSignTitle}>
        {titleText}
      </h2>
      <form
        className={`${classForm} ${classFormTypeSign}`}
        onSubmit={handleSubmit}>
        <fieldset className={classSignAuthBox}>
          <input
            id={idInputSignExpansionEmail}
            className={`${classInput} ${classInputSign} ${classInputSignExpansionEmail}`}
            name={nameInputSignExpansionEmail}
            type={typeInputEmail}
            placeholder={placeholderInputSignExpansionEmail}
            minLength={minLengthInputSignExpansionEmail}
            maxLength={maxLengthInputSignExpansionEmail}
            value={email}
            required
            onChange={(evt) => handleSetEmail(evt.target.value)}
          />
          <span
            id={idSpanSignExpansionEmail}
            className={`${classSpan} ${classSpanSignExpansionEmail}`}
          />
          <input
            id={idInputSignExpansionPassword}
            className={`${classInput} ${classInputSign} ${classInputSignExpansionPassword}`}
            name={nameInputSignExpansionPassword}
            type={typeInputPass}
            placeholder={placeholderInputSignExpansionPassword}
            minLength={minLengthInputSignExpansionPassword}
            maxLength={maxLengthInputSignExpansionPassword}
            value={password}
            required
            onChange={(evt) => handleSetPassword(evt.target.value)}
          />
          <span
            id={idSpanSignExpansionPassword}
            className={`${classSpan} ${classSpanSignExpansionPassword}`}
          />
        </fieldset>
        <fieldset className={classSignAuthBox}>
          <button
            type={typeBtnSubmit}
            className={`${classFormSubmitButton} ${classFormSubmitButtonSign} ${isLoading ?
              classFormSubmitButtonBlackLoader
              : ''}`}>
              {isLoading ?
              buttonTextLoading
              : buttonText}
          </button>
          <Link className={classSignLink} to={signExpansionLink}>
            {linkText}
          </Link>
        </fieldset>
      </form>
    </div>
  );
}

export default Sign;
