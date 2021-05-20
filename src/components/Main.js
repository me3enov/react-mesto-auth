import { useContext } from 'react';
import Card from './Card'
import CurrentUserContext from '../contexts/CurrentUserContext';

function Main({
  formAll,
  mainConfig,
  cardConfig,
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  cards,
  onCardClick,
  onCardLike,
  onCardDelete }) {

  const currentUser = useContext(CurrentUserContext);
  const { typeBtn } = formAll;
  const {
    classContent,
    classProfile,
    classProfileAvatar,
    classProfileLine,
    classProfileName,
    classProfileEditButton,
    classProfileJob,
    classProfileAddButton,
    classCards,
    ariaLabelCards,
    classGallery
  } = mainConfig;

  return (
    <main className={classContent}>
      <section className={classProfile}>
        <button className={classProfileAvatar}
          type={typeBtn}
          style={{ backgroundImage: `url(${currentUser.avatar})` }}
          onClick={onEditAvatar}>
        </button>
        <div className={classProfileLine}>
          <h1 className={classProfileName}>
            {currentUser.name}
          </h1>
          <button
            type={typeBtn}
            className={classProfileEditButton}
            onClick={onEditProfile}>
          </button>
        </div>
        <p className={classProfileJob}>
          {currentUser.about}
        </p>
        <button
          type={typeBtn}
          className={classProfileAddButton}
          onClick={onAddPlace}>
        </button>
      </section>

      <section className={classCards} aria-label={ariaLabelCards}>
        <ul className={classGallery}>
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              formAll={formAll}
              cardConfig={cardConfig}
              onCardClick={onCardClick}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main