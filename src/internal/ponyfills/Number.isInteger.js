import { both, converge, equals, identity } from 'ramda';

import isFinite from '../../isFinite.js';

const isIntegerPonyfill = both(
  isFinite,
  converge(equals, [Math.floor, identity])
);

export default isIntegerPonyfill;
