import {useState, useEffect} from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import CurrentUserContext from '../contexts/CurrentUserContext';
import api from '../utils/api';
import { getMe } from '../utils/auth';
import Header from './Header';
import Main from './Main';
import SignIn from './SignIn';
import SignUp from './SignUp';
import InfoTooltip from './InfoTooltip';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import ConfirmPopup from './ConfirmPopup';
import AddPlacePopup from './AddPlacePopup';
import ImagePopup from './ImagePopup'
import Footer from './Footer';
import {
  routeLinks,
  btnRouteLinksText,
  signConfig,
  popupConfig,
  formAll,
  cardConfig,
  addPlacePopupConfig,
  confirmPopupConfig,
  editAvatarPopupConfig,
  editProfilePopupConfig,
  footerConfig,
  headerConfig,
  imagePopupConfig,
  InfoTooltipConfig,
  mainConfig,
  navBarConfig,
  popupWithFormConfig,
  signInConfig,
  signUpConfig
} from '../utils/constants';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const [isSuccessSignUp, setIsSuccessSignUp] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  const [loggedIn, setLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [isLoading, setLoading] = useState(false);

  const history = useHistory();

  const {
    signUpLink,
    signInLink,
    homeLink
  } = routeLinks;

  const handleSignIn = () => {
    setLoggedIn(true);
  };

  function handleSignOut() {
    setLoggedIn(false);
  }

  const checkToken = () => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      getMe(jwt)
        .then((res) => {
          setLoggedIn(true);
          setUserEmail(res.data.email);
          history.push('/');
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    api.getCards()
      .then(res => {
        setCards(res);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleAddPlace(card) {
    setLoading(true);
    api.addNewCard(card)
      .then(res => {
        setCards([res, ...cards]);
        closeAllPopups();
      })
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      })
      .catch(err => console.log(err))
  }

  function handleCardDelete(card) {
    setLoading(true);
    api.removeCard(card)
      .then(() => {
        setCards(cards.filter(item => item._id !== card._id));
        closeAllPopups();
      })
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    api.getUserInfo()
      .then(res => {
        setCurrentUser(res)
      })
      .catch(err => console.log(err));
  }, [])

  function handleUpdateUser(user) {
    setLoading(true);
    const profile = {
      name: user.name,
      about: user.about
    };
    api.setUserInfo(profile)
      .then(res => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  }

  function handleUpdateAvatar(user) {
    setLoading(true);
    api.setUserAvatar(user.avatar)
      .then(res => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  };

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  };

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  };

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  }

  function handleDeleteClick(card) {
    setSelectedCard(card);
    setIsDeletePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsDeletePopupOpen(false);
    setIsImagePopupOpen(false);
    setIsInfoTooltipOpen(false);
    setSelectedCard(null)
  }

  useEffect(() => {
    function handleEscClose(evt) {
      if (evt.key === 'Escape') {
        closeAllPopups();
      }
    }
    document.addEventListener('keydown', handleEscClose);
    return () => {
      document.removeEventListener('keydown', handleEscClose);
    };
  }, [])

  useEffect(() => {
    checkToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='app'>
        <div className='root'>
          <Header
            loggedIn={loggedIn}
            userEmail={userEmail}
            routeLinks={routeLinks}
            formAll={formAll}
            btnRouteLinksText={btnRouteLinksText}
            headerConfig={headerConfig}
            navBarConfig={navBarConfig}
            onQuit={handleSignOut}
          />
            <Switch>
              <ProtectedRoute
                exact path={homeLink}
                loggedIn={loggedIn}
                component={Main}
                formAll={formAll}
                mainConfig={mainConfig}
                cardConfig={cardConfig}
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onEditAvatar={handleEditAvatarClick}
                cards={cards}
                onCardClick={handleCardClick}
                onCardLike={handleCardLike}
                onCardDelete={handleDeleteClick}
              />
              <Route path={signUpLink}>
                <SignUp
                  routeLinks={routeLinks}
                  formAll={formAll}
                  signConfig={signConfig}
                  signUpConfig={signUpConfig}
                  onInfoTooltipOpen={setIsInfoTooltipOpen}
                  setIsSuccessSignUp={setIsSuccessSignUp}
                  onLoading={setLoading}
                  isLoading={isLoading}
                />
              </Route>
              <Route path={signInLink}>
                <SignIn
                  routeLinks={routeLinks}
                  formAll={formAll}
                  signConfig={signConfig}
                  signInConfig={signInConfig}
                  handleSignIn = {handleSignIn}
                  onLoading={setLoading}
                  isLoading={isLoading}
                />
              </Route>
              <Route>
                {loggedIn ? (
                  <Redirect to={homeLink} />
                ) : (
                  <Redirect to={signInLink} />
                )}
              </Route>
            </Switch>
          <Footer
            routeLinks={routeLinks}
            footerConfig={footerConfig}
          />
          <EditProfilePopup
            formAll={formAll}
            editProfilePopupConfig={editProfilePopupConfig}
            popupConfig={popupConfig}
            popupWithFormConfig={popupWithFormConfig}
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
            isLoading={isLoading}
          />
          <EditAvatarPopup
            formAll={formAll}
            editAvatarPopupConfig={editAvatarPopupConfig}
            popupConfig={popupConfig}
            popupWithFormConfig={popupWithFormConfig}
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
            isLoading={isLoading}
          />
          <AddPlacePopup
            formAll={formAll}
            addPlacePopupConfig={addPlacePopupConfig}
            popupConfig={popupConfig}
            popupWithFormConfig={popupWithFormConfig}
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddPlace={handleAddPlace}
            isLoading={isLoading}
          />
          <ImagePopup
            formAll={formAll}
            popupConfig={popupConfig}
            imagePopupConfig={imagePopupConfig}
            isOpen={isImagePopupOpen}
            card={selectedCard}
            onClose={closeAllPopups}
          />
          <ConfirmPopup
            formAll={formAll}
            confirmPopupConfig={confirmPopupConfig}
            popupConfig={popupConfig}
            popupWithFormConfig={popupWithFormConfig}
            isOpen={isDeletePopupOpen}
            onClose={closeAllPopups}
            onDelete={handleCardDelete}
            card={selectedCard}
            isLoading={isLoading}
          />
          <InfoTooltip
            formAll={formAll}
            popupConfig={popupConfig}
            InfoTooltipConfig={InfoTooltipConfig}
            isOpen={isInfoTooltipOpen}
            isSuccess={isSuccessSignUp}
            onClose={closeAllPopups}
          />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
