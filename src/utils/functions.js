import { AsyncStorage } from 'react-native';

export const retrieveData = (key, callBack) => {
  AsyncStorage.getItem(key, (error, result) => {
    // console.log(result);

    if (error) {
      callBack(null, error);
    } else {
      callBack(result, null);
    }
  });
};

export const storeData = (key, value, fnc) => {
  AsyncStorage.setItem(key, value || '', fnc);
};

export const REQUEST = (method, url, headers, params, callback) => {
  // isJSON
  const options = {
    method
  };
  let realUrl = url;

  let body = '';

  Object.keys(params).forEach(function(key) {
    if (body.length > 0) {
      body += '&';
    } else {
      body += '?';
    }

    const value = params[key];
    body = `${body + key}=${encodeURIComponent(value)}`;
  });

  options.headers = headers;

  if (method === 'GET') {
    realUrl += body;
  } else if (body.length > 0) {
    options.body = body;
  }

  // let spaceRegex = / /g;
  // realUrl = realUrl.replace(spaceRegex, `%20`);

  // realUrl = encodeURIComponent(realUrl);

  // eslint-disable-next-line
  fetch(realUrl, options)
    .then(response => response.json())
    .then(responseJson => {
      // console.log(realUrl);
      // console.log(options);
      // console.log(responseJson);
      return callback(null, responseJson);
    })
    .catch(error => {
      // console.log(realUrl);
      // console.log(options);
      // console.log(error);
      callback(error, null);
    });
};

export const GET = (url, headers, params, callback) => {
  REQUEST('GET', url, headers, params, callback, false);
};
