import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './modal.css';
import { postGame } from '../../services/horseApi';

const Modal = ({ isOpen, setModalIsOpen, lines, lastTouchTime }) => {
  const [codeName, setCodeName] = useState('');

  const handleCodeNameChange = ({ target }) => {
    setCodeName(target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    postGame({
      score: lines,
      name: codeName,
      totalTime: lastTouchTime
    })
      .then(res => console.log(res));
  };

  return (  
    <div className={isOpen ? styles.Modal : styles.Hidden}>
      <section className={styles.Content}>

        <section className={styles.Close}>
          <button onClick={() => setModalIsOpen(false)}>X</button>
        </section>

        <form onSubmit={handleSubmit}>
          <header>
            <h1>Holy Guacamole!!</h1>
            <h3>you scored</h3>
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
  lastTouchTime: PropTypes.number
};

export default Modal;
