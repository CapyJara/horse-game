import React from 'react';
// import PropTypes from 'prop-types';
import styles from './game.css';

const Game = () => {
  return (
    <section className={styles.Game}>
      <div>
        <p>
          <pre>  (\w/)</pre>
          <pre>  (..  \</pre>
          <pre> _/  )  \______</pre>
          <pre>(oo /&rsquo;\        )`,</pre>
          <pre>&rsquo;&rsquo;&rsquo;&rsquo;  &#40;v  __&#40; &#x2F; ||</pre>
          <pre>      |||  |||  ||</pre>
          <pre>      |||  |||</pre>
          <pre>      |||  |||</pre>
          <pre>      |||  |||</pre>
          <pre>     &#x2F;&#x2F;_| &#x2F;&#x2F;_|   </pre>
        </p>
      </div>
    </section>
  );
};

export default Game;
