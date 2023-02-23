// var _ = require('lodash');
import _ from 'lodash';

const data = [
  {
    username: 'Jahiker',
    role: 'admin',
  },
  {
    username: 'Mafer',
    role: 'seller',
  },
  {
    username: 'Pili',
    role: 'seller',
  },
  {
    username: 'Jose',
    role: 'customer',
  },
];

const rta = _.groupBy(data, (item) => item.role);

console.log("🚀 ~ file: 17-lodash.ts:24 ~ rta:", rta)

const resp = 1 + '1'
