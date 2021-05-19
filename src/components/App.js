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
import AddPlacePopup from './AddPlacePopup';
import ImagePopup from './ImagePopup'
import Footer from './Footer';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isRegisterStatusPopupOpen, setIsRegisterStatusPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  const [loggedIn, setLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [isLoading, setLoading] = useState(false);

  const history = useHistory();

  useEffect(() => {
    checkToken();
  }, []);

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
    const cardData = {
      name: card.name,
      link: card.link
    };
    api.addNewCard(cardData)
      .then(res => {
        setCards([res, ...cards]);
        closeAllPopups();
      })
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  }

  function handleCardLike(card) {
    setLoading(true);
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      })
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  }

  function handleCardDelete(card) {
    setLoading(true);
    api.removeCard(card)
      .then(() => {
        setCards(cards.filter(item => item._id !== card._id));
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
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsRegisterStatusPopupOpen(false);
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

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='app'>
        <div className='root'>
          <Header
            loggedIn={loggedIn}
            userEmail={userEmail}
            onQuit={handleSignOut} />
            <Switch>
              <ProtectedRoute
                exact path='/'
                loggedIn={loggedIn}
                component={Main}
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onEditAvatar={handleEditAvatarClick}
                cards={cards}
                onCardLike={handleCardLike}
                onCardDelete={handleCardDelete}
                onCardClick={handleCardClick} />
              <Route path='/signup'>
                <SignUp
                  onInfoTooltipOpen={setIsRegisterStatusPopupOpen}
                  onLoading={setLoading}
                  isLoading={isLoading} />
              </Route>
              <Route path='/signin'>
                <SignIn handleSignIn = {handleSignIn}
                onLoading={setLoading}
                isLoading={isLoading} />
              </Route>
              <Route>
                {loggedIn ? (
                  <Redirect to='/' />
                ) : (
                  <Redirect to='/signin' />
                )}
              </Route>
            </Switch>
          <Footer />
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
            isLoading={isLoading} />
          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
            isLoading={isLoading} />
          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddPlace={handleAddPlace}
            isLoading={isLoading} />
          <ImagePopup
            card={selectedCard}
            onClose={closeAllPopups} />
          <InfoTooltip
            isOpen={isRegisterStatusPopupOpen}
            onClose={closeAllPopups} />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
