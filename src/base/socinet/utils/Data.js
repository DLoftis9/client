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

  async createUser(user) {
    const response = await this.api('/signup', 'POST', user);
    console.log(response);
    if (response.status === 200) {
      return response.json();
    }
    // else if (response.status === 400) {
    //   return response.json().then(data => {
    //     return data.errors;
    //   });
    // } else {
    //   throw new Error();
    // }
  }
}
