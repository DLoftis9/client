import config from './config';
// TO DO:
// refactor methods into Context
// check why environment variable is not working
// `${process.env.REACT_APP_API_URL}/signin`
// check why user that isn't signed in cannot check /users path without throwing an error in other browsers

// refactor signup method to be similar to signin(),
// and so user can redirect to being logged in

const url = config.apiBaseUrl;

// method to sign in user
export const signin = user => {
  return fetch(`${url}/signin`, {
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

// method to log out user
export const signout = next => {
  if (typeof window !== 'undefined') localStorage.removeItem('jwt');
  next();

  return fetch(`${url}/signout`, {
    method: 'GET',
  })
    .then(response => {
      console.log('signout', response);
      return response.json();
    })
    .catch(err => console.log(err));
};

// method to check authenticate user, and give them a token for localStorage
export const authenticate = (jwt, next) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('jwt', JSON.stringify(jwt));
    next();
  }
};

// method to check if user is authenticated to proceed with actions throughout the app
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

// method to read user data based on ID
export const read = (userId, token) => {
  return fetch(`${url}/user/${userId}`, {
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

// method to list all users
export const list = () => {
  return fetch(`${url}/users`, {
    method: 'GET',
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

// method to delete user account
export const remove = (userId, token) => {
  return fetch(`${url}/user/${userId}`, {
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

// method to update user data from inputs
export const update = (userId, token, user) => {
  console.log('USER DATA UPDATE: ', user);

  return fetch(`${url}/user/${userId}`, {
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

// method to update user data after editing in localStorage
export const updateUser = (user, next) => {
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('jwt')) {
      let auth = JSON.parse(localStorage.getItem('jwt'));
      auth.user = user;
      localStorage.setItem('jwt', JSON.stringify(auth));
      next();
    }
  }
};

export const follow = (userId, token, followId) => {
  return fetch(`${url}/user/follow`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ userId, followId }),
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const unfollow = (userId, token, unfollowId) => {
  return fetch(`${url}/user/unfollow`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ userId, unfollowId }),
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const findPeople = (userId, token) => {
  return fetch(`${url}/user/findpeople/${userId}`, {
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
