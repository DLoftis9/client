// TO DO:
// refactor methods into Context
// check why environment variable is not working
// check why user that isn't signed in cannot check /users path without throwing an error in other browsers

export const signin = user => {
  // `${process.env.REACT_APP_API_URL}/signin`
  return fetch('http://localhost:5000/api/signin', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },

    body: JSON.stringify(user),
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const signout = next => {
  if (typeof window !== 'undefined') localStorage.removeItem('jwt');
  next();

  return fetch('http://localhost:5000/api/signout', {
    method: 'GET',
  })
    .then(response => {
      console.log('signout', response);
      return response.json();
    })
    .catch(err => console.log(err));
};

export const authenticate = (jwt, next) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('jwt', JSON.stringify(jwt));
    next();
  }
};

export const isAuthenticated = () => {
  if (typeof window == 'undefined') {
    return false;
  }

  if (localStorage.getItem('jwt')) {
    return JSON.parse(localStorage.getItem('jwt'));
  } else {
    return false;
  }
};

export const read = (userId, token) => {
  return fetch(`http://localhost:5000/api/user/${userId}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const list = () => {
  return fetch('http://localhost:5000/api/users', {
    method: 'GET',
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const remove = (userId, token) => {
  return fetch(`http://localhost:5000/api/user/${userId}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const update = (userId, token, user) => {
  console.log('USER DATA UPDATE: ', user);

  return fetch(`http://localhost:5000/api/user/${userId}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: user,
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};
