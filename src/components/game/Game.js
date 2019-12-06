import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './game.css';
import Modal from '../modal/Modal';

let startTime = null;
let lastTouchTime = null;
let timeFromStart = null;
let colorNumber = 0;

const Game = ({ lines, setLines, history }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const colors = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#2E2B5F', '#8B00FF'];

  const startTimer = () => {
    timeFromStart = 1;
    setInterval(() => {
      timeFromStart += 1;
    }, 1000);
  };
  
  const scrollDown = () => {
    if(!startTime) {
      startTime = Date.now();
      startTimer();
    }
    else { lastTouchTime = timeFromStart; }
    
    setLines(lines++);
    if(colorNumber > colors.length) colorNumber = 0;
    if(lines > 13) document.querySelector(`.${styles.Legs}`).lastChild.remove();

    const legs = document.querySelector(`.${styles.Legs}`);
    const leg = document.createElement('pre');
    leg.textContent = '      |||  |||';
    leg.setAttribute('style', `color:${colors[colorNumber]};`);
    legs.prepend(leg);
    colorNumber++;
  };

  const finish = () => {
    setModalIsOpen(true);
  };
  
  return (
    <div className={styles.Game} onWheel={scrollDown} onTouchMove={scrollDown} >
      <section className={styles.Finish}>
        <button onClick={finish}>End Game</button>
      </section>

      <section className={styles.Horse}>
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

      <Modal 
        isOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        lastTouchTime={lastTouchTime}
        lines={lines}
        history={history}
      />
    </div>
  );
};

Game.propTypes = {
  setLines: PropTypes.func.isRequired,
  lines: PropTypes.number.isRequired,
  history: PropTypes.object.isRequired
};

export default Game;
