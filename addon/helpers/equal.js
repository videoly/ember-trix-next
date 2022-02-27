import { helper } from '@ember/component/helper';

export default helper(function equal(positional /*, named*/) {
  return positional.reduce((a, b) => a === b);
});
