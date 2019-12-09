import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './modal.css';
import { postGame } from '../../services/horseApi';

const Modal = ({ isOpen, setModalIsOpen, lines, lastTouchTime, history }) => {
  const [codeName, setCodeName] = useState('');
  const handleCodeNameChange = ({ target }) => {
    setCodeName(target.value);
  };
  
  const handleSubmit = e => {
    e.preventDefault();
    postGame({
      score: lines || 0,
      name: codeName,
      totalTime: lastTouchTime || 0
    })
      .then(() => history.push(`/leader/100/${codeName}/${lines}`));
    
  };

  return (  
    <div className={isOpen ? styles.Modal : styles.Hidden}>
      <section className={styles.Content}>

        <section className={styles.Close}>
          <button onClick={() => setModalIsOpen(false)}>X</button>
        </section>

        <form onSubmit={handleSubmit} >
          <header>
            <h1>Holy Guacamole!!</h1>
            <h2>you scored</h2>
            <h3>{lines} lines</h3>
          </header>

          <div>
            <input 
              type="text"
              placeholder="Enter your CodeName"
              onChange={handleCodeNameChange}
              maxLength="20"
              required
            />
            <button>Submit your score</button>
          </div>
        </form>

      </section>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setModalIsOpen: PropTypes.func.isRequired,
  lines: PropTypes.number.isRequired,
  lastTouchTime: PropTypes.number,
  history: PropTypes.object
};

export default Modal;
