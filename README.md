# `spread-out`

![npm (scoped)](https://img.shields.io/npm/v/spread-out.svg?style=popout-square)
![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg?style=popout-square)
[![Build Status](https://travis-ci.com/SivanMehta/spread-out.svg?branch=master)](https://travis-ci.com/SivanMehta/spread-out)

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
