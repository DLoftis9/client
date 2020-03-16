import config from './config';

// Data is a class with the API authentication utility methods
// used to create, sign up and authenticate a user. The file is
// for making GET and POST requests to the REST API.
export default class Data {
  // api(), is used to make the GET and POST requests to the REST API.
  // It currently accepts an API endpoint as its first argument (path),
  // followed by the HTTP method, and body, which will contain any data
  // associated with the request.
  // Initializing the parameters with default values in case no values
  // or undefined gets passed for either
  api(path, method = 'GET', body = null, requiresAuth = false, credentials = null) {
    // The url constant configures the request path using the base URL
    // defined in config.js, which gets passed to the returned fetch()
    // method below.
    const url = config.apiBaseUrl + path;

    const options = {
      method,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    };

    if (body !== null) {
      options.body = JSON.stringify(body);
    }

    // When making a request to a protected route on the server,
    // authentication is required (the requiresAuth is true). In that
    // case, encode the user credentials and set the HTTP Authorization
    // request header to the Basic Authentication type, followed by the
    // encoded user credentials
    if (requiresAuth) {
      // In the Basic auth scheme, a server requests authentication
      // information (a user ID and password) from a client. The client
      // passes the authentication information to the server in an
      // Authorization header using base-64 encoding.

      // The btoa() method creates a base-64 encoded ASCII string from a
      // "string" of data. btoa() is used to encode the username and
      // password credentials passed to the api() method. The credentials
      // will be passed as an object containing username and password properties.
      const encodedCredentials = btoa(`${credentials.username}:${credentials.password}`);

      // Set an Authorization header on each request that requires authentication
      // by adding an Authorization property to the headers object.
      options.headers['Authorization'] = `Basic ${encodedCredentials}`;
    }

    // fetch() accepts an optional second parameter: a configuration object
    // that controls a number of different settings you can apply to the request.

    // The options object, for example, sends a request with the HTTP
    // method, as well as the request headers and a stringified body
    // (if body is provided).
    return fetch(url, options);
  }

  // The getUser() and createUser() methods perform the async operations that
  // create and get an authenticated user of the social app, using the api() method.

  // getUser() makes a GET request to the /users endpoint, and returns a JSON
  // object containing user credentials. And createUser() makes a POST request,
  // sending new user data to the /users endpoint.
  async getUser(username, password) {
    const response = await this.api(`/users`, 'GET', null, true, { username, password });
    if (response.status === 200) {
      return response.json().then(data => data);
    } else if (response.status === 401) {
      return null;
    } else {
      throw new Error();
    }
  }

  async createUser(user) {
    const response = await this.api('/users', 'POST', user);
    if (response.status === 201) {
      return [];
    } else if (response.status === 400) {
      return response.json().then(data => {
        return data.errors;
      });
    } else {
      throw new Error();
    }
  }
}