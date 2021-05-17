import React, {useState, useEffect} from 'react';
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute.js";
import CurrentUserContext from "../contexts/CurrentUserContext";
import api from "../utils/api";
import { getMe } from '../utils/auth';
import Header from "./Header";
import Main from "./Main";
import SignIn from "./SignIn.js";
import SignUp from "./SignUp.js";
import InfoTooltip from './InfoTooltip';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ImagePopup from './ImagePopup'
import Footer from "./Footer";

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

  const history = useHistory();

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
  checkToken();

  useEffect(() => {
    api.getCards()
      .then(res => {
        setCards(res);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleAddPlace(card) {
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
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      const newCards = cards.map((c) => c._id === card._id ? newCard : c);
      setCards((cards) => cards.map(newCards));
    })
      .catch(err => console.log(err));
  }

  function handleCardDelete(card) {
    api.removeCard(card)
      .then(() => {
        setCards(cards.filter(item => item._id !== card._id));
      })
      .catch(err => console.log(err));
  }

  useEffect(() => {
    api.getUserInfo()
      .then(res => {
        setCurrentUser(res)
      })
      .catch(err => console.log(err));
  }, [])

  function handleUpdateUser(user) {
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
  }

  function handleUpdateAvatar(user) {
    api.setUserAvatar(user.avatar)
      .then(res => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch(err => console.log(err))
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
      <div className="app">
        <div className="root">
          <Header
            loggedIn={loggedIn}
            userEmail={userEmail}
            onQuit={handleSignOut}
          />
            <Switch>
              <ProtectedRoute
                exact path="/"
                loggedIn={loggedIn}
                component={Main}
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onEditAvatar={handleEditAvatarClick}
                cards={cards}
                onCardLike={handleCardLike}
                onCardDelete={handleCardDelete}
                onCardClick={handleCardClick}
              />
              <Route path='/signup'>
                <SignUp
                  setIsRegisterPopupOpen={setIsRegisterStatusPopupOpen}
                  isOpen={isRegisterStatusPopupOpen} />
              </Route>
              <Route path='/signin'>
                <SignIn handleSignIn = {handleSignIn} />
              </Route>
              <Route>
                {loggedIn ? (
                  <Redirect to="/" />
                ) : (
                  <Redirect to="/signin" />
                )}
              </Route>
            </Switch>
          <Footer />
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}/>
          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}/>
          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddPlace={handleAddPlace}/>
          <ImagePopup
            card={selectedCard}
            onClose={closeAllPopups}
          />
          <InfoTooltip
            isOpen={isRegisterStatusPopupOpen}
            onClose={closeAllPopups}
          />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
