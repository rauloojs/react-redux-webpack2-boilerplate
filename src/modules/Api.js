import axios from 'axios';

let host  = window.location.host;
let subdomain = 'devtuny';

if (host.indexOf('.') > -1) {
    subdomain = host.split('.')[0];
}

const Api = axios.create({
  baseURL: 'http://' + subdomain + '.kimetrics.com/api/v2/',
  headers: {'Authorization': 'basic ZGVzYXJyb2xsb0BraW1ldHJpY3MuY29tOktwZnA3ZUx0'}
});

export default Api;
