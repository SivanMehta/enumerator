const enumerate = require('./');
const assume = require('assume');

describe('Enumerator', function () {
  it('is a function', function () {
    assume(enumerate).is.a('function');
  });

  it('return a single object when passed an object', function () {
    const hero = {
      name: 'Batman',
      hometown: 'Gotham',
      power: 'Money'
    };

    const possibilities = enumerate(hero);
    assume(JSON.stringify(hero)).equals(JSON.stringify(possibilities[0]));
  });

  it('returns the correct number of total possibilities', function () {
    const lineup = {
      qb: ['Tom', 'Aaron', 'Cam'],
      receiver: ['Juju', 'Odell'],
      coach: ['Bill', 'Sean', 'Hue']
    };

    const teams = enumerate(lineup);
    assume(teams).has.length(lineup.qb.length * lineup.receiver.length * lineup.coach.length);
  });

  it('uses each possibility a correct number of times', function () {
    const lineup = {
      qb: ['Tom', 'Aaron', 'Cam'],
      receiver: ['Juju', 'Odell'],
      coach: ['Bill', 'Sean', 'Hue'],
      mascot: ['Snap', 'Crackle', 'Pop']
    };
    const teams = enumerate(lineup);

    const counts = {
      qb: new Set(),
      receiver: new Set(),
      coach: new Set(),
      mascot: new Set()
    };

    teams.forEach(team => {
      Object.entries(team).forEach(([position, player]) => {
        counts[position].add(player);
      });
    });

    Object.entries(counts).forEach(([position, set]) => {
      assume(set.size).equals(lineup[position].length);
    });
  });
});
