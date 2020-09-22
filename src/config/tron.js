/* eslint-disable import/no-extraneous-dependencies */
import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

import { name, ip as host } from './data';

const reactotron = Reactotron.configure({
  name,
  host,
})
  .use(reactotronRedux())
  .use(sagaPlugin({}))
  .connect();

if (reactotron.clear) reactotron.clear();

export default reactotron;
