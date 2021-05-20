import { useContext } from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';

function Card({
  card,
  formAll,
  cardConfig,
  onCardClick,
  onCardLike,
  onCardDelete }) {

  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const { typeBtn } = formAll;
  const {
    classCard,
    classCardImage,
    classCardTitle,
    classCardLikeContainer,
    classCardLikeCount,
    classDeleteBtn,
    classDeleteBtnActive,
    classLikeBtn,
    classLikeBtnLiked
  } = cardConfig;
  const isLiked = card.likes.some(i => i._id === currentUser._id);

  function handleCardClick() {
    onCardClick(card)
  }

  function handleDeleteCard() {
    onCardDelete(card)
  }

  function handleCardLike() {
    onCardLike(card)
  }

  return(
    <li className={classCard}>
      <div
        className={classCardImage}
        style={{ backgroundImage: `url(${card.link})` }}
        onClick={handleCardClick}
      />
      <button
        className={
          `${classDeleteBtn}
          ${isOwn ?
          classDeleteBtnActive
          : ''}`}
        type={typeBtn}
        onClick={handleDeleteCard}
      />
      <h2 className={classCardTitle}>
        {card.name}
      </h2>
      <div className={classCardLikeContainer}>
        <button
          className={
            `${classLikeBtn}
            ${isLiked ?
            classLikeBtnLiked
            : ''}`}
          type={typeBtn}
          onClick={handleCardLike}
        />
        <span className={classCardLikeCount}>
          {card.likes.length}
        </span>
      </div>
  </li>
  )
}

export default Card;