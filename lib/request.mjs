import axios from 'axios';
import querystring from 'querystring';
import getLogger from './logger.mjs';

const logger = getLogger('lib/request');

const logAndReturn = val => {
  const { status, statusText, data } = val;
  logger.verbose('%d: %s', status, statusText);

  return val;
};

export const put = (uri, payload, config = {}) => {
  logger.verbose('Sending a PUT request to %s', uri);
  logger.verbose('Payload:', payload);
  return axios.put(uri, payload, config).then(logAndReturn);
};

export const post = (uri, payload, config = {}) => {
  logger.verbose('Sending a POST request to %s', uri);
  logger.verbose('Payload:', payload);
  return axios.post(uri, payload, config).then(logAndReturn);
};

export const get = (uri, queryObject, config = {}) => {
  const queryString = querystring.stringify(queryObject);
  logger.verbose('Sending a GET request to %s', uri);
  logger.verbose('QueryString:', queryString);

  return axios.get(`${uri}?${queryString}`, config).then(logAndReturn);
};
