const authUrl = 'https://auth.nomoreparties.co';

export const signUp = (email, password) => {
  return fetch(`${authUrl}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const signIn = (email, password) => {
  return fetch(`${authUrl}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      localStorage.setItem('jwt', data.token);
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getMe = (token) => {
  return fetch(`${authUrl}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => data)
    .catch((err) => {
      console.log(err);
    });
};
