import React from 'react';
import PropTypes from 'prop-types';
import styles from './game.css';

let colorNumber = 0;
const Game = ({ lines, setLines }) => {
  const colors = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#2E2B5F', '#8B00FF'];
  
  const scrollDown = () => {
    setLines(lines++);
    if(colorNumber > colors.length) colorNumber = 0;
    if(lines > 15) document.querySelector(`.${styles.Legs}`).lastChild.remove();

    const legs = document.querySelector(`.${styles.Legs}`);
    const leg = document.createElement('pre');
    leg.textContent = '      |||  |||';
    leg.setAttribute('style', `color:${colors[colorNumber]};`);
    legs.prepend(leg);
    colorNumber++;
  };

  
  return (
    <div className={styles.Game} onWheel={scrollDown}>
      <section>
        <div>
          <pre>  (\w/)</pre>
          <pre>  (..  \</pre>
          <pre> _/  )  \______</pre>
          <pre>(oo /&rsquo;\        )`,</pre>
          <pre>&rsquo;&rsquo;&rsquo;&rsquo;  &#40;v  __&#40; &#x2F; ||</pre>
          <pre>      |||  |||  ||</pre>
          <div className={styles.Legs}>
            <pre>      |||  |||</pre>
            <pre>      |||  |||</pre>
            <pre>      |||  |||</pre>
          </div>
          <pre>     &#x2F;&#x2F;_| &#x2F;&#x2F;_|   </pre>
        </div>
      </section>
    </div>
  );
};

Game.propTypes = {
  setLines: PropTypes.func.isRequired,
  lines: PropTypes.number.isRequired
};

export default Game;
