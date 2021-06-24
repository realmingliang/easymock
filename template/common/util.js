import axios from 'axios';

function createAPI() {
  return axios;
}
function convertOpts(opts) {
  if (!opts || !opts.path) return opts;
  delete opts.path
  return opts;
}

function convertRESTAPI(url, opts) {
  if (!opts || !opts.path) return url;

  const pathKeys = Object.keys(opts.path);

  pathKeys.forEach((key) => {
    const r = new RegExp('(:' + key + '|{' + key + '})', 'g');
    url = url.replace(r, opts.path[key]);
  });

  return url;
}

export {
  axios,
  createAPI,
  convertOpts,
  convertRESTAPI
};