import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
    });
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
            <Link to="/leader/10">
              <button>Submit your score</button>
            </Link>
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
