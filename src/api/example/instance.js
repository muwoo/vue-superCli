import { createAPI } from '../util';
import config from '../config';

const baseUrl = {
  mock: 'https://www.easy-mock.com/mock/59ccc676a0ab222a113acacc/example',
  dev: '',
  pre: '',
  prod: ''
}[config.env || 'mock'];

console.log(process.env.NODE_ENV);

export default createAPI(baseUrl);
