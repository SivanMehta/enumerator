# `spread out`

Spread out all of the possibilities, given an object with iterable values

## Installation

```
npm install spread-out
```

## Usage

```js
const spread = require('spread-out');

const lineup = {
  hero: ['Goku', 'Vegeta'],
  villian: ['Frieza', 'Cell']
};

const battles = spread(lineup);
console.log(battles);

/*
[ { hero: 'Goku', villian: 'Frieza' },
  { hero: 'Goku', villian: 'Cell' },
  { hero: 'Vegeta', villian: 'Frieza' },
  { hero: 'Vegeta', villian: 'Cell' } ]
 */
```

## Tests

```
npm test
```
