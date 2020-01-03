// eslint-disable-next-line no-undef
const BASE_URL = 'http://horse-game.herokuapp.com';

const postGame = (body) => {
  // eslint-disable-next-line no-undef
  return fetch(`${BASE_URL}/api/v1/game`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  })
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'unable to post new game';
      return json;
    });
};

const fetchTopScores = () => {
  // eslint-disable-next-line no-undef
  return fetch(`${BASE_URL}/api/v1/game/top/100`)
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'unable to post new game';
      return json;
    });
};

const fetchStats = () => {
  // eslint-disable-next-line no-undef
  return Promise.resolve({
    gamesPlayed: 119,
    longestTime: [1, 42],
    gamePlayTimes: [
      ['One Minute', 38],
      ['Five Minutes', 28],
      ['Ten minutes', 18],
      ['Thirty Minutes', 2],
      ['One Hour', 4],
      ['Hour Plus', 6]
    ]
  });
};

export {
  postGame,
  fetchTopScores,
  fetchStats
};
