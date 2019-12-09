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

const getTopScores = (num) => {
  // eslint-disable-next-line no-undef
  return fetch(`${BASE_URL}/api/v1/game/top/${num}`)
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'unable to post new game';
      return json;
    });
};

export {
  postGame,
  getTopScores
};
